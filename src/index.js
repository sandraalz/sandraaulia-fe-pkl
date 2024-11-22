import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Mengimpor komponen App yang baru saja dibuat
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Menampilkan komponen App */}
  </React.StrictMode>,
  document.getElementById('root')
);

// Jika kamu menggunakan reportWebVitals
reportWebVitals();
