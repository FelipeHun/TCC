
import React from 'react';

const BairroSelector = ({ bairros, onSelect }) => {
  return (
    <div className="bairro-selection">
      {bairros.map((bairro) => (
        <button key={bairro.bairro} onClick={() => onSelect(bairro)}>
          {bairro.bairro}
        </button>
      ))}
    </div>
  );
};

export default BairroSelector;
