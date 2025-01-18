import React from 'react';
import VideoCard from '../VideoCard/VideoCard'; // Importar VideoCard
import './Categories.css';

const Categories = ({ title, videos, onEdit, onDelete, color }) => {
  return (
    <div className="category">
      <h3 style={{ color }}>{title}</h3> {/* El color del título depende de la categoría */}
      <div className="video-list-categories"> {/* Cambié el nombre de la clase aquí */}
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          ))
        ) : (
          <p>No hay videos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
