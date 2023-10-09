import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente App

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente App dentro del elemento root */}
  </React.StrictMode>,
  document.getElementById('root') // Encuentra el elemento con el id "root" en tu HTML
);
