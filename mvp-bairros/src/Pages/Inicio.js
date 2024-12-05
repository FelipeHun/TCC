import React from 'react';
import './Inicio.css';
import image1 from './Images/GRAJAU-SP.png'; 
import image2 from './Images/GRAJAU-SP.png'; 
import image3 from './Images/GRAJAU-SP.png';

const Inicio = () => {
  return (
    <div className="Inicio">
      {/* Banner */}
      <section className="Banner">
        <h1>Explore Bairros com Avaliações Reais</h1>
        <p>
          Descubra informações detalhadas sobre qualidade de vida, segurança, transporte e muito mais, com opiniões de moradores e visitantes.
        </p>
        <form>
          <label htmlFor="search-bar" className="visually-hidden">Pesquisar bairros</label>
          <div className="SearchBar">
            <input type="text" id="search-bar" placeholder="Digite o nome do bairro ou cidade..." aria-label="Pesquisar" />
          </div>
        </form>
      </section>

      {/* Sobre o Projeto */}
      <section className="Sobre">
        <h2>Sobre o Terreo</h2>
        <p>
          O Terreo é uma plataforma dedicada a conectar pessoas que desejam conhecer melhor os bairros onde moram ou desejam morar. 
          Através de avaliações autênticas de moradores e visitantes, nosso objetivo é oferecer informações úteis e confiáveis.
        </p>
        <h3>Nosso Propósito</h3>
        <p>
          Queremos criar uma comunidade colaborativa que compartilhe experiências reais. Acreditamos que, ao unir a força da colaboração, 
          podemos construir um banco de dados único sobre bairros e cidades.
        </p>
        <h3>Como Funciona?</h3>
        <ul>
          <li>Compartilhe sua experiência sobre um bairro.</li>
          <li>Leia opiniões sobre segurança, transporte e lazer.</li>
          <li>Use informações confiáveis para tomar melhores decisões.</li>
        </ul>
      </section>

      {/* Funcionalidades */}
      <section className="Funcionalidades">
        <h2>Funcionalidades</h2>
        <div className="Cards">
          <div className="Card">
            <img src={image1} alt="Encontrar o bairro ideal" />
            <h3>Encontre o bairro ideal</h3>
            <p>Pesquise bairros com base em avaliações detalhadas e tome decisões mais informadas.</p>
          </div>
          <div className="Card">
            <img src={image2} alt="Leia avaliações detalhadas" />
            <h3>Leia avaliações detalhadas</h3>
            <p>Explore opiniões reais sobre infraestrutura, segurança e mais.</p>
          </div>
          <div className="Card">
            <img src={image3} alt="Compartilhe sua opinião" />
            <h3>Compartilhe sua opinião</h3>
            <p>Ajude outras pessoas contando sobre sua experiência em um bairro.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="Contato">
        <h2>Entre em Contato</h2>
        <p>Quer saber mais sobre o projeto? Envie suas dúvidas ou sugestões!</p>
        <form className="ContatoForm">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Inicio;
