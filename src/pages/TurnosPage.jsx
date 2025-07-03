import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TurnoList from '../components/Turnos/TurnoList';
import TurnoForm from '../components/Turnos/TurnoForm';
import { turnosApi } from '../services/api';
import TurnoSearch from '../components/Turnos/TurnoSearch';
import Pagination from '../components/UI/Pagination';
import { toast } from '../components/UI/Toast';

const TurnosPage = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTurno, setSelectedTurno] = useState(null);
  const [searchParams, setSearchParams] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [turnos, setTurnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const data = await turnosApi.listar();
        setTurnos(data);
      } catch (err) {
        setError(err.message);
        toast.error('Error al cargar los turnos');
      } finally {
        setLoading(false);
      }
    };

    fetchTurnos();
  }, []);
  const [filterStatus, setFilterStatus] = useState('all');

  // Filtrar turnos según parámetros de búsqueda
  const filteredTurnos = turnos.filter(turno => {
    const matchesSearch = !searchParams.searchTerm || 
      turno.cliente.nombre.toLowerCase().includes(searchParams.searchTerm.toLowerCase()) ||
      turno.cliente.email.toLowerCase().includes(searchParams.searchTerm.toLowerCase());
    
    const matchesDate = !searchParams.date || 
      turno.fecha === searchParams.date;
    
    const matchesTime = !searchParams.time || 
      turno.hora === searchParams.time;
    
    const matchesStatus = filterStatus === 'all' || turno.estado === filterStatus;
    
    return matchesSearch && matchesDate && matchesTime && matchesStatus;
  });

  // Paginar los turnos filtrados
  const paginatedTurnos = filteredTurnos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredTurnos.length / itemsPerPage);

  const handleCreate = async (turnoData) => {
    try {
      const nuevoTurno = await turnosApi.crear(turnoData);
      setTurnos([...turnos, nuevoTurno]);
      setShowForm(false);
      toast.success('Turno creado exitosamente');
    } catch (error) {
      console.error('Error al crear el turno:', error);
      toast.error('Error al crear el turno');
    }
  };

  const handleEdit = (turno) => {
    setSelectedTurno(turno);
    setShowForm(true);
  };

  const handleApprove = async (id) => {
    try {
      await turnosApi.actualizar(id, { estado: 'aprobado' });
      setTurnos(turnos.map(turno => turno.id === id ? { ...turno, estado: 'aprobado' } : turno));
      toast.success('Turno aprobado exitosamente');
    } catch (error) {
      console.error('Error al aprobar el turno:', error);
      toast.error('Error al aprobar el turno');
    }
  };

  const handleReject = async (id) => {
    try {
      await turnosApi.actualizar(id, { estado: 'rechazado' });
      setTurnos(turnos.map(turno => turno.id === id ? { ...turno, estado: 'rechazado' } : turno));
      toast.success('Turno rechazado exitosamente');
    } catch (error) {
      console.error('Error al rechazar el turno:', error);
      toast.error('Error al rechazar el turno');
    }
  };

  const handleUpdate = async (turnoData) => {
    try {
      const updatedTurno = await turnosApi.actualizar(selectedTurno.id, turnoData);
      setTurnos(turnos.map(turno => turno.id === selectedTurno.id ? updatedTurno : turno));
      setShowForm(false);
      setSelectedTurno(null);
      toast.success('Turno actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar el turno:', error);
      toast.error('Error al actualizar el turno');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este turno?')) {
      try {
        await turnosApi.eliminar(id);
        setTurnos(turnos.filter(turno => turno.id !== id));
        toast.success('Turno eliminado exitosamente');
      } catch (error) {
        console.error('Error al eliminar el turno:', error);
        toast.error('Error al eliminar el turno');
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedTurno(null);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="card-title mb-0">Gestión de Turnos</h1>
            {!showForm && user.role === 'user' && (
              <button
                className="btn btn-purple"
                onClick={() => setShowForm(true)}
              >
                <i className="fas fa-plus me-2"></i>
                Solicitar Turno
              </button>
            )}
          </div>

          {user.role === 'admin' && (
            <div className="mb-4">
              <div className="btn-group">
                <button
                  className={`btn ${filterStatus === 'all' ? 'btn-purple' : 'btn-outline-purple'}`}
                  onClick={() => setFilterStatus('all')}
                >
                  Todos
                </button>
                <button
                  className={`btn ${filterStatus === 'pendiente' ? 'btn-purple' : 'btn-outline-purple'}`}
                  onClick={() => setFilterStatus('pendiente')}
                >
                  Pendientes
                </button>
                <button
                  className={`btn ${filterStatus === 'aprobado' ? 'btn-purple' : 'btn-outline-purple'}`}
                  onClick={() => setFilterStatus('aprobado')}
                >
                  Aprobados
                </button>
                <button
                  className={`btn ${filterStatus === 'rechazado' ? 'btn-purple' : 'btn-outline-purple'}`}
                  onClick={() => setFilterStatus('rechazado')}
                >
                  Rechazados
                </button>
              </div>
            </div>
          )}

          {showForm ? (
            <div className="row justify-content-center">
              <div className="col-md-8">
                <TurnoForm
                  turno={selectedTurno}
                  onSubmit={selectedTurno ? handleUpdate : handleCreate}
                  onCancel={handleCancel}
                />
              </div>
            </div>
          ) : (
            <div>
              <TurnoList
                turnos={paginatedTurnos}
                onEdit={(turno) => {
                if (turno.estado === 'pendiente') {
                  return handleEdit(turno);
                }
                return null;
              }}
                onDelete={user.role === 'admin' ? handleDelete : null}
                onApprove={user.role === 'admin' ? handleApprove : null}
                onReject={user.role === 'admin' ? handleReject : null}
                userRole={user.role}
                username={user.username}
              />
              <TurnoSearch onSearch={setSearchParams} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TurnosPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired
};

export default TurnosPage;