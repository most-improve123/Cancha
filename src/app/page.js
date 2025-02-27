// src/app/page.js
"use client";
import React, { useState } from 'react';
import PlanoDeportivo from '../components/PlanoDeportivo';
import ResumenReserva from '../components/ResumenReserva';
import SelectorDeporte from '../components/SelectorDeporte';
import ReservaCancha from '../components/ReservaCancha';
import 'bootstrap/dist/css/bootstrap.min.css';




const deportesDisponibles = ['Fútbol', 'Baloncesto', 'Tenis'];

const HomePage = () => {
  const [canchas, setCanchas] = useState([
    { deporte: 'Fútbol', disponible: true },
    { deporte: 'Baloncesto', disponible: true },
    { deporte: 'Tenis', disponible: true },
  ]);
  const [deporteSeleccionado, setDeporteSeleccionado] = useState(deportesDisponibles[0]);
  const [reserva, setReserva] = useState(null);

  const seleccionarCancha = (index) => {
    setCanchas((prevCanchas) =>
      prevCanchas.map((cancha, i) =>
        i === index ? { ...cancha, disponible: !cancha.disponible } : cancha
      )
    );
    setReserva(canchas[index]);
  };

  const cambiarDeporte = (deporte) => {
    setDeporteSeleccionado(deporte);
  };

  return (
    <div className="container">
      <h1>Reserva de Canchas Deportivas</h1>
      <SelectorDeporte deportes={deportesDisponibles} cambiarDeporte={cambiarDeporte} />
      <PlanoDeportivo canchas={canchas} seleccionarCancha={seleccionarCancha} />
      <ResumenReserva reserva={reserva} />
      <ReservaCancha />
    </div>
  );
};

export default HomePage;
