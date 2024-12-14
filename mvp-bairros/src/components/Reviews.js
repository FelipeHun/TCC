// src/components/Reviews.js
import React from 'react';

const Reviews = () => {
  return (
    <div className="reviews">
      <h2>Avaliações Recentes</h2>
      <div className="review">
        <p>⭐⭐⭐⭐⭐ - "Ótima infraestrutura e segurança! <strong>- Octávio S.</strong>"</p>
      </div>
      <div className="review">
        <p>⭐⭐⭐    - "Bairro mediano, linhas de onibus não muito boas. <strong>- Regina S.</strong>"</p>
        <p>⭐           - "Ruim . <strong>- Paulo M.</strong>"</p>
        <p>⭐⭐⭐⭐⭐ - "Muito Bom <strong>- Marcus V.</strong>"</p>
        <p>⭐⭐⭐      - "Péssimo, não recomendo. <strong>- Fábio A.</strong>"</p>
      </div>
    </div>
  );
};

export default Reviews;
