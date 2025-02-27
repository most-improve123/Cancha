import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const deportes = {
  futbol: ['Cancha 1', 'Cancha 2', 'Cancha 3'],
  baloncesto: ['Cancha 1', 'Cancha 2'],
  tenis: ['Cancha 1']
};

const precios = {
  futbol: 20,
  baloncesto: 15,
  tenis: 10
};

const ReservaCancha = () => {
  const [deporte, setDeporte] = useState('futbol');
  const [reservas, setReservas] = useState({});
  const [mensaje, setMensaje] = useState('');
  const [duracion, setDuracion] = useState(1);

  const reservar = (cancha) => {
    if (reservas[`${deporte}-${cancha}`]) {
      setMensaje('Error: Cancha ya reservada');
    } else {
      setReservas({ ...reservas, [`${deporte}-${cancha}`]: true });
      setMensaje('Reserva exitosa');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-white">Reserva de Canchas Deportivas</h1>
      <SelectorDeporte deporte={deporte} setDeporte={setDeporte} />
      <label className="text-white">Duración (horas):</label>
      <input 
        type="number" 
        min="1" 
        className="form-control mb-3" 
        value={duracion} 
        onChange={(e) => setDuracion(Number(e.target.value) || 1)} 
        placeholder="Duración (horas)" 
      />
      <PlanoDeportivo deporte={deporte} reservas={reservas} onReservar={reservar} />
      <ResumenReserva deporte={deporte} mensaje={mensaje} duracion={duracion} />
    </div>
  );
};

const SelectorDeporte = ({ deporte, setDeporte }) => (
  <select className="form-select mb-3" value={deporte} onChange={(e) => setDeporte(e.target.value)}>
    <option value="futbol">Fútbol</option>
    <option value="baloncesto">Baloncesto</option>
    <option value="tenis">Tenis</option>
  </select>
);

const PlanoDeportivo = ({ deporte, reservas, onReservar }) => (
  <div>
    <h3 className="text-white">Plano Deportivo</h3>
    <div className="d-flex gap-2">
      {deportes[deporte].map((cancha) => (
        <Cancha key={cancha} cancha={cancha} deporte={deporte} reservas={reservas} onReservar={onReservar} />
      ))}
    </div>
  </div>
);

const Cancha = ({ cancha, deporte, reservas, onReservar }) => {
  const reservada = reservas[`${deporte}-${cancha}`];
  return (
    <button className={`btn ${reservada ? 'btn-warning' : 'btn-primary'}`} onClick={() => onReservar(cancha)}>
      {cancha}
    </button>
  );
};

const ResumenReserva = ({ deporte, mensaje, duracion }) => {
  const total = precios[deporte] * duracion;
  return (
    <div className="mt-3 text-white">
      <h3>Resumen de Reserva</h3>
      <p>Deporte: {deporte.charAt(0).toUpperCase() + deporte.slice(1)}</p>
      <p>Duración: {duracion} hora(s)</p>
      <p>Total: ${total}</p>
      {mensaje && <p className={`text-${mensaje.includes('Error') ? 'danger' : 'success'}`}>{mensaje}</p>}
    </div>
  );
};

export default ReservaCancha;