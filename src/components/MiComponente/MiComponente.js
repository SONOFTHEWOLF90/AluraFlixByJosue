import React, { useState, useEffect } from 'react';

const MiComponente = () => {
  const [estado, setEstado] = useState('inicial');

  useEffect(() => {
    // Código para ejecutar cuando el componente se monta o actualiza
  }, []);

  return (
    <div>
      <p>Estado: {estado}</p>
      <button onClick={() => setEstado('actualizado')}>Actualizar Estado</button>
    </div>
  );
}

export default MiComponente;

