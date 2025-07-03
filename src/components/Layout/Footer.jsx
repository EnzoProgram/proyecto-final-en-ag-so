import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto footer-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-purple">LevelStyle</h5>
            <p>Tu peluquería de confianza. Estilo y profesionalismo en cada corte.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-purple">Horarios</h5>
            <p>Lunes a Viernes: 9:00 - 20:00<br />Sábados: 9:00 - 18:00</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-purple">Contacto</h5>
            <p>
              📍 Av. Siempreviva 742<br />
              📞 (123) 456-7890<br />
              ✉️ info@levelstyle.com
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} LevelStyle. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;