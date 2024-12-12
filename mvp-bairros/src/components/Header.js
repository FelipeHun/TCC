import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1>Terreo - Avaliação de Bairros</h1>
      
      {/* Botão do menu mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Nav com classe dinâmica para mobile */}
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Início</Link>
        <Link to="/avaliacoes" onClick={toggleMenu}>Avaliações</Link>
        <Link to="#bairros" onClick={toggleMenu}>Bairros</Link>
        <Link to="#sobre" onClick={toggleMenu}>Sobre</Link>
        <Link to="#contato" onClick={toggleMenu}>Contato</Link>
      </nav>

      <div className={`auth-icons ${isMenuOpen ? 'open' : ''}`}>
        <button>Login</button>
        <button>Cadastrar</button>
      </div>
    </header>
  );
};

export default Header;