import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faEdit, faTrash, faClock, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

const TurnoList = ({ turnos, onEdit, onDelete, onApprove, onReject, userRole, username }) => {
  const totalTurnos = turnos.length;
  const turnosMostrados = turnos.slice(0, 10); // Mostrar solo los primeros 10 turnos

  return (
    <div className="table-responsive">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Total de turnos: {totalTurnos}</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary btn-sm">
            <FontAwesomeIcon icon={faClock} className="me-2" />
            Hoy
          </button>
          <button className="btn btn-outline-primary btn-sm">
            <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
            Ver detalles
          </button>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Servicio</th>
            <th>Estado</th>
            {userRole === 'admin' && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {turnosMostrados.map((turno) => (
            <tr key={turno.id}>
              <td>
                {turno.cliente}
                <br />
                <small className="text-muted">{turno.mail}</small>
              </td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
              <td>{turno.servicio}</td>
              <td>
                <span className={`badge ${getStatusClass(turno.estado)}`}>
                  {turno.estado.charAt(0).toUpperCase() + turno.estado.slice(1)}
                </span>
              </td>
              {userRole === 'admin' && (
                <td>
                  <div className="btn-group">
                    {turno.estado === 'pendiente' ? (
                      <>
                        <button
                          className="btn btn-sm btn-success me-1"
                          onClick={() => onApprove(turno.id)}
                          title="Aprobar"
                        >
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                          className="btn btn-sm btn-danger me-1"
                          onClick={() => onReject(turno.id)}
                          title="Rechazar"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </>
                    ) : turno.estado === 'aprobado' ? (
                      <span className="text-success">
                        <FontAwesomeIcon icon={faCheck} className="me-1" />
                        
                      </span>
                    ) : (
                      <span className="text-danger">
                        <FontAwesomeIcon icon={faTimes} className="me-1" />
                        
                      </span>
                    )}
                    <button
                      className="btn btn-sm btn-primary me-1"
                      onClick={() => onEdit(turno)}
                      title="Editar"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => onDelete(turno.id)}
                      title="Eliminar"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function getStatusClass(status) {
    switch (status) {
      case 'pendiente':
        return 'bg-warning text-dark';
      case 'aprobado':
        return 'bg-success';
      case 'rechazado':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
};

TurnoList.propTypes = {
  turnos: PropTypes.array.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onApprove: PropTypes.func,
  onReject: PropTypes.func,
  userRole: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default TurnoList;