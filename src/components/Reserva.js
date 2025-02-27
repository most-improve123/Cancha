// src/components/Reserva.js
import React, { useState } from 'react';
import ResumenReserva from '../components/ResumenReserva';

const Reserva = () => {
  const [reserva, setReserva] = useState({
    deporte: 'futbol',
    disponible: true,
    duracion: 0, // Inicializamos la duración
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReserva((prevState) => ({
      ...prevState,
      [name]: parseFloat(value) || 0, // Asegúrate de convertir el valor a número
    }));
  };

  return (
    <div>
      <h2>Reservar Cancha</h2>
      <label>
        Duración (horas):
        <input
          type="number"
          name="duracion"
          value={reserva.duracion}
          onChange={handleChange}
          min="0"
        />
      </label>
      <ResumenReserva reserva={reserva} />
    </div>
  );
};

export default Reserva;
