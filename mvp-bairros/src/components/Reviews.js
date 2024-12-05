// src/components/Reviews.js
import React from 'react';

const Reviews = () => {
  return (
    <div className="reviews">
      <h2>Avaliações Recentes</h2>
      <div className="review">
        <p>⭐⭐⭐⭐⭐ - "Ótima infraestrutura e segurança! <strong>-- Octávio Scremin</strong>"</p>
      </div>
      <div className="review">
        <p>⭐⭐⭐⭐    - "Bairro mediano, linhas de onibus não muito boas. <strong>-- Regina</strong>"</p>
        <p>⭐           - "Ruim. <strong>-- Paulo</strong>"</p>
        <p>⭐⭐⭐⭐⭐ - "Muito Bom <strong>-- Fábio</strong>"</p>
      </div>
    </div>
  );
};

export default Reviews;
