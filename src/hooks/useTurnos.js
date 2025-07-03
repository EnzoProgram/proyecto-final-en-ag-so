import { useState, useEffect } from 'react';
import { turnosApi } from '../services/api';

const useTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTurnos();
  }, []);

  const fetchTurnos = async () => {
    try {
      setLoading(true);
      const data = await turnosApi.listar();
      setTurnos(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar los turnos: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const createTurno = async (turnoData) => {
    try {
      setLoading(true);
      const newTurno = await turnosApi.crear({
        ...turnoData,
        estado: 'pendiente',
        createdAt: new Date().toISOString()
      });
      setTurnos(prev => [...prev, newTurno]);
      return newTurno;
    } catch (err) {
      setError('Error al crear el turno: ' + err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateTurno = async (id, turnoData) => {
    try {
      setLoading(true);
      const updatedTurno = await turnosApi.actualizar(id, turnoData);
      setTurnos(prev =>
        prev.map(turno =>
          turno.id === id ? updatedTurno : turno
        )
      );
    } catch (err) {
      setError('Error al actualizar el turno: ' + err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTurno = async (id) => {
    try {
      setLoading(true);
      await turnosApi.eliminar(id);
      setTurnos(prev => prev.filter(turno => turno.id !== id));
    } catch (err) {
      setError('Error al eliminar el turno: ' + err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    turnos,
    loading,
    error,
    createTurno,
    updateTurno,
    deleteTurno,
    refreshTurnos: fetchTurnos
  };
};

export default useTurnos;