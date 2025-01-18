import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import Banner from './components/Banner/Banner';
import Modal from './components/Modal/Modal';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    axios.get('http://localhost:3000/videos')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los datos:', error);
      });
  };

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/videos/${id}`)
      .then(() => {
        setVideos(videos.filter(video => video.id !== id));
      })
      .catch(error => {
        console.error('Hubo un error al eliminar el video:', error);
        alert('Hubo un error al eliminar el video.');
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
    fetchVideos();  // Refrescar los videos después de cerrar el modal
  };

  return (
    <div className="App">
      <Header />
      {location.pathname === '/' && (
        <Banner 
          title="Bienvenido a Aluraflix" 
          subtitle="Disfruta de los mejores videos" 
        />
      )}
      <Routes>
        <Route 
          path="/" 
          element={<Home 
                      videos={videos} 
                      handleEdit={handleEdit} 
                      handleDelete={handleDelete} 
                   />} 
        />
        <Route path="/nuevo-video" element={<NuevoVideo fetchVideos={fetchVideos} />} />
      </Routes>
      <Footer />
      {showModal && (
  <Modal show={showModal} onClose={handleCloseModal} video={selectedVideo} />)}
    </div>
  );
};

export default App;
