import React from 'react';
import VideoCard from '../components/VideoCard/VideoCard';
import './Home.css';

const Home = ({ videos, handleEdit, handleDelete }) => {
  // Categorizar los videos
  const categorizeVideos = (videos) => {
    const categories = {
      Frontend: [],
      Backend: [],
      'Innovación y Gestión': [],
    };

    videos.forEach(video => {
      let category = video.categoria;

      // Asignar a categorías
      if (category === 'Frontend') {
        categories['Frontend'].push(video);
      } else if (category === 'Backend') {
        categories['Backend'].push(video);
      } else if (category === 'Innovación y Gestión') {
        categories['Innovación y Gestión'].push(video);
      }
    });

    return categories;
  };

  // Colores de las categorías
  const categoryColors = {
    Frontend: '#61dafb', // Color para Frontend
    Backend: '#00b300',   // Color para Backend
    'Innovación y Gestión': '#ffcc00', // Color para Innovación y Gestión
  };

  const categorizedVideos = categorizeVideos(videos);

  return (
    <main className="home">
      {Object.keys(categorizedVideos).map(category => (
        <div key={category} className={`category ${category.toLowerCase().replace(/\s+/g, '-')}`}>
          <h3 style={{ backgroundColor: categoryColors[category] }}>{category}</h3>
          <div className="video-list-home"> {/* Cambié el nombre de la clase aquí */}
            {categorizedVideos[category].map(video => (
              <VideoCard 
                key={video.id}
                video={video}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Home;
