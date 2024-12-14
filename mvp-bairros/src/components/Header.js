import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", text: "Início" },
    { href: "/avaliacoes", text: "Avaliações" },
    { href: "/padrao", text: "Bairros" },
    { href: "/padrao", text: "Sobre" },
    { href: "/padrao", text: "Contato" }
  ];

  return (
    <header className="header">
      <h1>Térreo - Avaliação de Bairros</h1>
      
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Menu de navegação"
      >
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a 
            key={item.text}
            href={item.href} 
            onClick={() => setIsMenuOpen(false)}
          >
            {item.text}
          </a>
        ))}
      </nav>

      <div className={`auth-icons ${isMenuOpen ? 'open' : ''}`}>
        <button className="login-btn">Login</button>
        <button className="register-btn">Cadastrar</button>
      </div>
    </header>
  );
};

export default Header;