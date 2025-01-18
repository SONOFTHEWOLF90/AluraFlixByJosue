import React from 'react';
import { createRoot } from 'react-dom/client'; // Importación correcta para React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Importa las fuentes y los estilos globales aquí

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
