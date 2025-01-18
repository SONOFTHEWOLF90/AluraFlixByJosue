import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../../assets/home.png';
import newVideoIcon from '../../assets/newvideo.png';
import logo from '../../assets/logo.png'; // Importamos la imagen del logo
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`header ${isResponsive ? 'responsive' : ''}`}>
      <div className="header-logo">
        <img src={logo} alt="Aluraflix Logo" className="logo" /> {/* Reemplazamos el h1 con la imagen */}
      </div>
      <div className="header-buttons">
        {location.pathname === '/' && (
          <>
            <Link to="/" className="header-button">
              {isResponsive ? (
                <>
                  <img src={homeIcon} alt="Home" className="icon" />
                  HOME
                </>
              ) : (
                "HOME"
              )}
            </Link>
            <Link to="/nuevo-video" className="header-button">
              {isResponsive ? (
                <img src={newVideoIcon} alt="Nuevo Video" className="icon" />
              ) : (
                "NUEVO VIDEO"
              )}
            </Link>
          </>
        )}

        {location.pathname === '/nuevo-video' && (
          <>
            <Link to="/" className="header-button">
              {isResponsive ? (
                <img src={homeIcon} alt="Home" className="icon" />
              ) : (
                "HOME"
              )}
            </Link>
            <Link to="/nuevo-video" className="header-button">
              {isResponsive ? (
                <>
                  <img src={newVideoIcon} alt="Nuevo Video" className="icon" />
                  NUEVO VIDEO
                </>
              ) : (
                "NUEVO VIDEO"
              )}
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
