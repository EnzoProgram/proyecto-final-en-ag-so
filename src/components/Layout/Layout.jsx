import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from './Footer';

const Layout = ({ children, user, onLogout }) => {

  return (
    <div className="layout-container d-flex flex-column h-100">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'linear-gradient(45deg, #4a154b, #9d4edd)', zIndex: 1030 }}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">LevelStyle</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/turnos">Turnos</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <span className="text-light me-3">
                {user.username} ({user.role})
              </span>
              <button
                className="btn btn-outline-light"
                onClick={onLogout}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="container-fluid flex-grow-1 pt-5">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired,
  onLogout: PropTypes.func.isRequired
};

export default Layout;