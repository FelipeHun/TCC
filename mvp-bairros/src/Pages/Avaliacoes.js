// src/Pages/Avaliacoes.js
import React, { useState } from 'react';
import Map from '../components/Map';
import BairroSelector from '../components/BairroSelector';
import Filters from '../components/Filters';
import Reviews from '../components/Reviews';
import Graphs from '../components/Graphs';
import bairrosData from '../bairros.json'; // Dados dos bairros
import './Avaliacoes.css';

const Avaliacoes = () => {
  const [selectedBairro, setSelectedBairro] = useState(bairrosData[0]);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para a pesquisa

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  // Filtra bairros com base no texto da barra de pesquisa
  const filteredBairros = bairrosData.filter((bairro) =>
    bairro.bairro.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="Avaliacoes">
      {/* Barra de Pesquisa */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar bairros..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Layout Principal */}
      <div className="main-container">
        {/* Mapa */}
        <div className="map-container">
          <Map 
            latitude={selectedBairro.latitude}
            longitude={selectedBairro.longitude}
            bairro={selectedBairro.bairro}
          />
        </div>

        {/* Área de Informações (Filtros, Seleção de Bairro, Avaliações e Gráficos) */}
        <div className="info-container">
          <BairroSelector bairros={filteredBairros} onSelect={setSelectedBairro} />
          <Filters />
          <Reviews />
          <Graphs data={[4, 3, 5]} /> {/* Passando dados fictícios para o gráfico */}
        </div>
      </div>
    </div>
  );
};

export default Avaliacoes;
