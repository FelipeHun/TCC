// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importando o Link do React Router
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>Terreo - Avaliação de Bairros</h1>
    <nav>
      {/* Usando o Link do React Router para navegação */}
      <Link to="/">Início</Link> {/* Link para a página inicial */}
      <Link to="/avaliacoes">Avaliações</Link> {/* Link para a página de Avaliações */}
      <Link to="#bairros">Bairros</Link>
      <Link to="#sobre">Sobre</Link>
      <Link to="#contato">Contato</Link>
    </nav>
    <div className="auth-icons">
      <button>Login</button>
      <button>Cadastrar</button>
    </div>
  </header>
);

export default Header;
