import React from 'react';
import './Banner.css';
import imagenFondo from '../../assets/banner.jpg';
import imageAsset from '../../assets/destacado.jpeg';

const Banner = ({ title, subtitle }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <div className="text-column">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="image-column">
          <img src={imageAsset} alt="Featured content" className="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
