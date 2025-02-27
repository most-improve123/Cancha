// src/components/ResumenReserva.js
import React from 'react';

const ResumenReserva = ({ reserva }) => {
  const calcularCosto = (duracion) => {
    const costoPorHora = 20; // Ejemplo de costo por hora
    return duracion * costoPorHora;
  };

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
