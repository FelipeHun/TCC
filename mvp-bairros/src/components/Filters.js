// src/components/Filters.js
import React from 'react';
import { FaShieldAlt, FaBeer, FaCarSide } from 'react-icons/fa'; // Importando ícones

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filtros</h2>

      <div className="filter-category">
        <label><FaShieldAlt /> Segurança</label>
        <p>🔵 🔵 🔵 ⚪ ⚪ </p>
      </div>
      <div className="filter-category">
        <label><FaBeer /> Lazer</label>
        <p>🔵 🔵 🔵 ⚪ ⚪ </p>
      </div>
      <div className="filter-category">
        <label><FaCarSide /> Transporte</label>
         <p>🔵 🔵 🔵 🔵 ⚪ </p>
      </div>
    </div>
  );
};

export default Filters;
