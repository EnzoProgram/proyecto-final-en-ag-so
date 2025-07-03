import React from 'react';
import PropTypes from 'prop-types';

const TurnoCard = ({ turno, onEdit, onDelete, onApprove, onReject, userRole, showActions }) => {
  
  const getBadgeColor = (estado) => {
    const colores = {
      pendiente: 'warning',
      aprobado: 'success',
      rechazado: 'danger'
    };
    return colores[estado] || 'secondary';
  };

  return (
    <div className="card mb-3 shadow-sm" style={{ borderColor: '#e9ecef' }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title text-purple">{turno.cliente}</h5>
          <span className={`badge bg-${getBadgeColor(turno.estado)}`}>
            {turno.estado.toUpperCase()}
          </span>
        </div>
        
        <div className="mb-2 text-muted">
          <i className="fas fa-calendar me-2 text-purple"></i>
          {turno.fecha}
        </div>
        
        <div className="mb-2 text-muted">
          <i className="fas fa-clock me-2 text-purple"></i>
          {turno.hora}
        </div>
        
        <div className="mb-2 text-muted">
          <i className="fas fa-cut me-2 text-purple"></i>
          {turno.servicio}
        </div>
        
        <div className="mb-2 text-muted">
          <i className="fas fa-dollar-sign me-2 text-purple"></i>
          ${turno.precio}
        </div>
        
        {turno.notas && (
          <div className="mb-2 text-muted">
            <i className="fas fa-sticky-note me-2 text-purple"></i>
            {turno.notas}
          </div>
        )}
        
        {showActions && (
          <div className="mt-3 d-flex justify-content-end gap-2">
            {userRole === 'admin' && turno.estado === 'pendiente' && (
              <>
                <button 
                  className="btn btn-outline-success btn-sm"
                  onClick={() => onApprove(turno.id)}
                >
                  <i className="fas fa-check me-1"></i>
                  Aprobar
                </button>
                <button 
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onReject(turno.id)}
                >
                  <i className="fas fa-times me-1"></i>
                  Rechazar
                </button>
              </>
            )}
            {onEdit && (
              <button 
                className="btn btn-outline-purple btn-sm"
                onClick={() => onEdit(turno)}
              >
                <i className="fas fa-edit me-1"></i>
                Editar
              </button>
            )}
            {onDelete && (
              <button 
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(turno.id)}
              >
                <i className="fas fa-trash-alt me-1"></i>
                Eliminar
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

TurnoCard.propTypes = {
  turno: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cliente: PropTypes.string.isRequired,
    mail: PropTypes.string,
    servicio: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    notas: PropTypes.string
  }).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onApprove: PropTypes.func,
  onReject: PropTypes.func,
  userRole: PropTypes.string.isRequired,
  showActions: PropTypes.bool.isRequired
};

export default TurnoCard;