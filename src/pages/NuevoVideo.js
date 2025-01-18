import React, { useState } from 'react';
import axios from 'axios';
import './NuevoVideo.css';

const NuevoVideo = ({ fetchVideos }) => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [message, setMessage] = useState(''); // Mensaje de éxito o error
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para deshabilitar el botón durante el submit

  // Validar URL con un regex mejorado
  const validateURL = (url) => {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[a-zA-Z0-9#?&%=~_+.-]*)*$/;
    return regex.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación de campos vacíos
    if (!titulo || !categoria || !imagen || !videoUrl || !descripcion) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    // Validación de URLs
    if (!validateURL(imagen) || !validateURL(videoUrl)) {
      setMessage('Por favor, ingrese URLs válidas para la imagen y el video.');
      return;
    }

    const nuevoVideo = { titulo, categoria, imagen, videoUrl, descripcion };

    setIsSubmitting(true); // Activar el estado de envío

    axios.post('http://localhost:3000/videos', nuevoVideo)
      .then(response => {
        setMessage('¡Video agregado exitosamente!');
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideoUrl('');
        setDescripcion('');
        fetchVideos(); // Refrescar los videos
      })
      .catch(error => {
        console.error('Hubo un error al agregar el video:', error);
        setMessage('Hubo un error al agregar el video.');
      })
      .finally(() => {
        setIsSubmitting(false); // Desactivar el estado de envío
      });
  };

  const handleReset = () => {
    setTitulo('');
    setCategoria('');
    setImagen('');
    setVideoUrl('');
    setDescripcion('');
    setMessage(''); // Reinicia el mensaje
  };

  // Validar si todos los campos están completos
  const isFormValid = titulo && categoria && imagen && videoUrl && descripcion;

  return (
    <main className="NuevoVideo">
      <h2>NUEVO VIDEO</h2>
      <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      <hr className="linea-horizontal" />
      <h2>Crear Tarjeta</h2>
      <hr className="linea-horizontal" />
      
      {message && <p className={`form-message ${message.includes('error') ? 'error' : 'success'}`}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group-nuevovideo">
            <label htmlFor="titulo">Título</label>
            <input 
              type="text" 
              id="titulo" 
              value={titulo} 
              placeholder="Ingrese el título"
              onChange={(e) => setTitulo(e.target.value)} 
              required
              aria-label="Título del video"
            />
          </div>
          <div className="form-group-nuevovideo">
            <label htmlFor="categoria">Categoría</label>
            <select 
              id="categoria" 
              value={categoria} 
              onChange={(e) => setCategoria(e.target.value)}
              required
              aria-label="Categoría del video"
            >
              <option value="">Seleccione una categoría</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group-nuevovideo">
            <label htmlFor="imagen">Imagen</label>
            <input 
              type="text" 
              id="imagen" 
              value={imagen} 
              placeholder="Ingrese el enlace de la imagen"
              onChange={(e) => setImagen(e.target.value)} 
              required
              aria-label="Enlace de la imagen"
            />
          </div>
          <div className="form-group-nuevovideo">
            <label htmlFor="videoUrl">Video</label>
            <input 
              type="text" 
              id="videoUrl" 
              value={videoUrl} 
              placeholder="Ingrese el enlace del video"
              onChange={(e) => setVideoUrl(e.target.value)} 
              required
              aria-label="Enlace del video"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group-nuevovideo-descripcion">
            <label htmlFor="descripcion">Descripción</label>
            <textarea 
              id="descripcion" 
              value={descripcion} 
              placeholder="Por ejemplo: Este video explica los fundamentos de React."
              onChange={(e) => setDescripcion(e.target.value)}
              required
              aria-label="Descripción del video"
            ></textarea>
          </div>
        </div>

        <div className="form-buttons">
          <button 
            type="submit" 
            className="guardar-button-nuevovideo" 
            disabled={!isFormValid || isSubmitting} // Deshabilita el botón si el formulario no es válido o está enviando
          >
            {isSubmitting ? 'Enviando...' : 'Guardar'}
          </button>
          <button type="button" className="limpiar-button-nuevovideo" onClick={handleReset}>Limpiar</button>
        </div>
      </form>
    </main>
  );
};

export default NuevoVideo;
