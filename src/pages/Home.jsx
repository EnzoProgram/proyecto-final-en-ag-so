import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Principal */}
      <div className="banner bg-gradient text-light text-center py-5" style={{ background: 'linear-gradient(45deg, #4a154b, #9d4edd)' }}>
        <div className="container py-5">
          <h1 className="display-2 fw-bold mb-4">LevelStyle</h1>
          <p className="lead mb-4">Eleva tu estilo al siguiente nivel</p>
          <Link to="/turnos" className="btn btn-light btn-lg px-4 me-3">Reservar Turno</Link>
        </div>
      </div>

      {/* Servicios */}
      <section className="services py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nuestros Servicios</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-cut fa-3x mb-3 text-purple"></i>
                  <h3 className="card-title h4">Cortes</h3>
                  <p className="card-text">Cortes modernos y clásicos para todos los estilos</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-palette fa-3x mb-3 text-purple"></i>
                  <h3 className="card-title h4">Coloración</h3>
                  <p className="card-text">Tinturas y mechas con productos de primera calidad</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="fas fa-spa fa-3x mb-3 text-purple"></i>
                  <h3 className="card-title h4">Tratamientos</h3>
                  <p className="card-text">Tratamientos capilares para revitalizar tu cabello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="why-us py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">¿Por qué elegirnos?</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <i className="fas fa-clock fa-2x mb-3 text-purple"></i>
                <h4>Horarios Flexibles</h4>
                <p>Adaptamos nuestros horarios a tu agenda</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <i className="fas fa-star fa-2x mb-3 text-purple"></i>
                <h4>Experiencia</h4>
                <p>Más de 10 años de experiencia en el rubro</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <i className="fas fa-heart fa-2x mb-3 text-purple"></i>
                <h4>Atención Personalizada</h4>
                <p>Nos adaptamos a tus necesidades y preferencias</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <i className="fas fa-gem fa-2x mb-3 text-purple"></i>
                <h4>Calidad Premium</h4>
                <p>Utilizamos productos de primera calidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
  export default Home;