import React, { useState } from 'react';
import './VideoCard.css';
import editarIcono from '../../assets/editar.png'; 
import borrarIcono from '../../assets/borrar.png';

const VideoCard = ({ video, handleEdit, handleDelete }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  }

  // Función para extraer el ID del video de YouTube desde la URL
  const extractVideoId = (url) => {
    // Si la URL está vacía, retornamos null
    if (!url) return null;

    // Expresión regular corregida sin escapes innecesarios
    // eslint-disable-next-line no-useless-escape
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([\w-]{10,})/;
    const matches = url.match(youtubeRegex);

    if (matches && matches[1]) {
      return matches[1]; // Si encontramos el ID del video, lo retornamos
    }
    return null; // Si no encontramos el ID, retornamos null
  };

  const categoriaClase = video.categoria ? video.categoria.toLowerCase().replace(/\s+/g, '-') : 'categoria-desconocida';

  return (
    <div className={`video-card ${categoriaClase}`}>
      {!isPlaying ? (
        <img
          src={video.imagen}
          alt={video.titulo}
          className="video-thumbnail"
          onClick={togglePlayback}
        />
      ) : (
        <div className="video-container">
          <iframe
            title={video.titulo}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${extractVideoId(video.videoUrl)}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            onClick={togglePlayback}
          />
        </div>
      )}
      <div className="video-actions">
        <button onClick={() => handleDelete(video.id)} className="delete-button">
          <img src={borrarIcono} alt="Borrar" className="action-icon" /> Borrar
        </button>
        <button onClick={() => handleEdit(video)} className="edit-button">
          <img src={editarIcono} alt="Editar" className="action-icon" /> Editar
        </button>
      </div>
    </div>
  );
}

export default VideoCard;
