// src/components/PlanoDeportivo.js
import React from 'react';

const PlanoDeportivo = ({ canchas, seleccionarCancha }) => {
  return (
    <div>
      <h2>Plano Deportivo</h2>
      <ul>
        {canchas.map((cancha, index) => (
          <li key={index} onClick={() => seleccionarCancha(index)}>
            {cancha.deporte}: {cancha.disponible ? 'Disponible' : 'No Disponible'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanoDeportivo;
