// src/components/ResumenReserva.js
import React from 'react';

const ResumenReserva = ({ reserva }) => {
  return (
    <div>
      <h2>Resumen de Reserva</h2>
      {reserva ? (
        <div>
          <p>Deporte: {reserva.deporte}</p>
          <p>Disponibilidad: {reserva.disponible ? 'Disponible' : 'No Disponible'}</p>
        </div>
      ) : (
        <p>No hay reserva seleccionada</p>
      )}
    </div>
  );
};

export default ResumenReserva;
