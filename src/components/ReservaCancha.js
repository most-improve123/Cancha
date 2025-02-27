// src/components/ReservaCancha.js
import React, { useState } from 'react';

const ReservaCancha = () => {
  const [reservas, setReservas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const reservar = (cancha) => {
    if (reservas.includes(cancha)) {
      setMensaje('Error: Cancha ya reservada');
    } else {
      setReservas([...reservas, cancha]);
      setMensaje('Reserva exitosa');
    }
  };

  return (
    <div>
      <button onClick={() => reservar('futbol')}>Reservar Fútbol</button>
      <button onClick={() => reservar('baloncesto')}>Reservar Baloncesto</button>
      <button onClick={() => reservar('tenis')}>Reservar Tenis</button>
      {mensaje && <div>{mensaje}</div>}
    </div>
  );
};

export default ReservaCancha;
