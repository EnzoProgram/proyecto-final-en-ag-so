import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const TurnoForm = ({ turno, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    cliente: '',
    mail: '',
    telefono: '',
    servicio: '',
    fecha: '',
    hora: '',
    estado: 'pendiente',
    notas: '',
    precio: 0
  });

  const precios = {
    'Corte de Cabello': 2500,
    'Tintura': 5000,
    'Peinado': 2000,
    'Tratamiento Capilar': 3500,
    'Manicura': 1500,
    'Pedicura': 2000
  };

  useEffect(() => {
    if (turno) {
      setFormData({
        cliente: turno.cliente,
        mail: turno.mail || '',
        telefono: turno.telefono || '',
        servicio: turno.servicio,
        fecha: new Date(turno.fecha).toISOString().split('T')[0],
        hora: turno.hora,
        estado: turno.estado,
        notas: turno.notas || '',
        precio: turno.precio || precios[turno.servicio] || 0
      });
    }
  }, [turno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'servicio' ? { precio: precios[value] || 0 } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title mb-4">
          {turno ? 'Editar Turno' : 'Nuevo Turno'}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cliente" className="form-label">Nombre del Cliente</label>
            <input
              type="text"
              className="form-control"
              id="cliente"
              name="cliente"
              value={formData.cliente}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mail" className="form-label">Mail</label>
            <input
              type="email"
              className="form-control"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="servicio" className="form-label">Servicio</label>
            <select
              className="form-select"
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar servicio</option>
              <option value="Corte de Cabello">Corte de Cabello</option>
              <option value="Tintura">Tintura</option>
              <option value="Peinado">Peinado</option>
              <option value="Tratamiento Capilar">Tratamiento Capilar</option>
              <option value="Manicura">Manicura</option>
              <option value="Pedicura">Pedicura</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">Fecha</label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="hora" className="form-label">Hora</label>
            <input
              type="time"
              className="form-control"
              id="hora"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
            />
          </div>

          {turno && (
            <div className="mb-3">
              <label htmlFor="estado" className="form-label">Estado</label>
              <select
                className="form-select"
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              >
                <option value="pendiente">Pendiente</option>
                <option value="confirmado">Confirmado</option>
                <option value="cancelado">Cancelado</option>
              </select>
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="notas" className="form-label">Notas</label>
            <textarea
              className="form-control"
              id="notas"
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="precio" className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
              readOnly
            />
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              {turno ? 'Guardar Cambios' : 'Crear Turno'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

TurnoForm.propTypes = {
  turno: PropTypes.shape({
    id: PropTypes.string,
    cliente: PropTypes.string.isRequired,
    mail: PropTypes.string,
    telefono: PropTypes.string,
    servicio: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    notas: PropTypes.string,
    precio: PropTypes.number
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default TurnoForm;