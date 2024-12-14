import React from 'react';
import './padrao.css';

const Padrao = () => {
  return (
    <div className="Padrao">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="search-input"
          disabled // Desabilitado pois a página está em construção
        />
      </div>

      <div className="main-container">
        <div className="construction-message">
          <h1>Página em Construção</h1>
          <p>Esta página está sendo desenvolvida. Em breve, novos recursos estarão disponíveis.</p>
        </div>
      </div>
    </div>
  );
};

export default Padrao;