// src/components/SelectorDeporte.js
import React from 'react';

const SelectorDeporte = ({ deportes, cambiarDeporte }) => {
  return (
    <div>
      <h2>Seleccionar Deporte</h2>
      <select onChange={(e) => cambiarDeporte(e.target.value)}>
        {deportes.map((deporte, index) => (
          <option key={index} value={deporte}>
            {deporte}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorDeporte;
