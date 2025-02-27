// src/components/Cancha.js
import React, { useState } from 'react';

const Cancha = () => {
  const [disponibilidad, setDisponibilidad] = useState({
    futbol: true,
    baloncesto: false,
    tenis: true,
  });

  return (
    <div>
      {disponibilidad.futbol && <div>Cancha de Fútbol Disponible</div>}
      {!disponibilidad.baloncesto && <div>Cancha de Baloncesto No Disponible</div>}
      {disponibilidad.tenis && <div>Cancha de Tenis Disponible</div>}
    </div>
  );
};

export default Cancha;
