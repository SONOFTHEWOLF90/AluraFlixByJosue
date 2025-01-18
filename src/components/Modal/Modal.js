import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Modal.css';
import cerrarIcono from '../../assets/cerrar.png';  // Ruta correcta para acceder a la imagen

const Modal = ({ show, onClose, video }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (video) {
      setTitulo(video.titulo);
      setCategoria(video.categoria);
      setImagen(video.imagen);
      setVideoUrl(video.videoUrl);
      setDescripcion(video.descripcion);
    }
  }, [video]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = { titulo, categoria, imagen, videoUrl, descripcion };
    axios
      .put(`http://localhost:3000/videos/${video.id}`, updatedVideo)
      .then((response) => {
        alert('Video actualizado exitosamente');
        onClose(); // Cerrar el modal después de guardar
      })
      .catch((error) => {
        console.error('Hubo un error al actualizar el video:', error);
        alert('Hubo un error al actualizar el video.');
      });
  };

  const handleClear = () => {
    setTitulo('');
    setCategoria('');
    setImagen('');
    setVideoUrl('');
    setDescripcion('');
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <img src={cerrarIcono} alt="Cerrar" />
        </span>
        <h2>EDITAR CARD:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group-modal">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="form-group-modal">
            <label htmlFor="categoria">Categoría</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>
          </div>
          <div className="form-group-modal">
            <label htmlFor="imagen">Imagen</label>
            <input
              type="text"
              id="imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </div>
          <div className="form-group-modal">
            <label htmlFor="videoUrl">Video</label>
            <input
              type="text"
              id="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <div className="form-group-modal-descripcion">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="guardar-button-modal">Guardar</button>
            <button type="button" className="limpiar-button-modal" onClick={handleClear}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
