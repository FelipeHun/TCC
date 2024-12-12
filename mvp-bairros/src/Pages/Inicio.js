import React from 'react';
import './Inicio.css';
import image1 from './Images/unnamed.png'; 
import image2 from './Images/unnamed-1.png'; 
import image3 from './Images/unnamed-2.png';

const Inicio = () => {
  return (
    <div className="Inicio">
      {/* Banner */}
      <section className="Banner">
        <div className="Banner-content">
          <h1>Explore Bairros com Avaliações Reais</h1>
          <p>
            Descubra informações detalhadas sobre qualidade de vida, segurança, transporte e muito mais, com opiniões de moradores e visitantes.
          </p>
          <form className="SearchForm">
            <label htmlFor="search-bar" className="visually-hidden">Pesquisar bairros</label>
            <div className="SearchBar">
              <input 
                type="text" 
                id="search-bar" 
                placeholder="Digite o nome do bairro ou cidade..." 
                aria-label="Pesquisar"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="Sobre">
        <div className="Sobre-content">
        <h2>Sobre o Terreo</h2>
<p>
  O Terreo é mais do que uma simples plataforma digital – é uma comunidade criada para conectar pessoas interessadas em descobrir e compartilhar informações detalhadas sobre os bairros das cidades brasileiras. 
  Nosso objetivo é fornecer uma visão abrangente e confiável que vai além das estatísticas frias, trazendo experiências reais e relatos autênticos.
</p>
<h3>Nosso Propósito</h3>
<p>
  Acreditamos que o conhecimento compartilhado tem o poder de transformar decisões importantes. Seja para quem está procurando um novo lugar para morar, buscando um local ideal para abrir um negócio, ou até mesmo para planejar uma visita, 
  nosso propósito é facilitar o acesso a informações relevantes sobre os bairros. Queremos tornar a tomada de decisão mais simples, segura e embasada.
</p>
<p>
  Além disso, trabalhamos para criar um senso de pertencimento, incentivando os usuários a colaborarem ativamente com a plataforma. 
  Cada avaliação, relato ou dado compartilhado ajuda a construir um retrato fiel dos bairros, valorizando as particularidades de cada região e dando voz às comunidades locais.
</p>
<h3>O Que Nos Torna Diferentes?</h3>
<ul>
  <li>
    <strong>Confiabilidade:</strong> Todas as avaliações passam por um sistema de curadoria para garantir que as informações sejam reais, autênticas e relevantes.
  </li>
  <li>
    <strong>Perspectivas Diversas:</strong> Nossa plataforma reúne opiniões de moradores, visitantes e especialistas, oferecendo uma visão 360° sobre os bairros.
  </li>
  <li>
    <strong>Foco em Qualidade de Vida:</strong> Avaliamos critérios que realmente importam, como segurança, infraestrutura, transporte público, áreas de lazer, cultura, entre outros.
  </li>
  <li>
    <strong>Engajamento da Comunidade:</strong> Promovemos a troca de experiências e incentivamos o envolvimento das pessoas para criar uma base de dados rica e colaborativa.
  </li>
  <li>
    <strong>Dados Contextualizados:</strong> Apresentamos insights relevantes, com mapas interativos, análises por região e filtros personalizados para cada necessidade.
  </li>
</ul>
<h3>Como Funciona o Terreo?</h3>
<ul>
  <li>
    <strong>Cadastro e Participação:</strong> Faça seu cadastro, escolha os bairros que você conhece e comece a avaliar diferentes aspectos como segurança, transporte, lazer, acessibilidade, custo de vida e muito mais.
  </li>
  <li>
    <strong>Consulta de Avaliações:</strong> Navegue pelas avaliações compartilhadas por outros usuários, descubra os pontos fortes e fracos de cada bairro e obtenha informações detalhadas que não estão disponíveis em guias tradicionais.
  </li>
  <li>
    <strong>Interatividade:</strong> Utilize nossa ferramenta de busca personalizada para encontrar bairros que atendam às suas necessidades específicas, seja proximidade de transporte público, escolas de qualidade ou áreas verdes para lazer.
  </li>
  <li>
    <strong>Colaboração Constante:</strong> Atualize ou complemente suas avaliações sempre que novas informações surgirem. Isso mantém os dados relevantes e precisos para toda a comunidade.
  </li>
</ul>
<h3>Principais Benefícios da Plataforma</h3>
<ul>
  <li>
    <strong>Tomada de Decisões Mais Consciente:</strong> Escolha bairros com base em informações práticas e experiências reais.
  </li>
  <li>
    <strong>Melhor Planejamento:</strong> Se você está se mudando, abrindo um negócio ou simplesmente explorando, nossa plataforma ajuda a evitar surpresas desagradáveis.
  </li>
  <li>
    <strong>Conexão com a Comunidade:</strong> Descubra o que as pessoas dizem sobre os bairros e participe ativamente dessa conversa.
  </li>
  <li>
    <strong>Transparência:</strong> Um ambiente confiável, onde os dados são validados para evitar informações enganosas.
  </li>
</ul>
<h3>Por Que Escolher o Terreo?</h3>
<p>
  Diferente de ferramentas genéricas ou opiniões superficiais encontradas na internet, o Terreo foi projetado para ser uma solução completa e confiável. Nosso diferencial está na combinação de tecnologia, colaboração da comunidade e curadoria especializada. 
  Aqui, os usuários têm voz ativa e contribuem diretamente para a construção de uma plataforma útil e significativa.
</p>
<h3>Junte-se à Nossa Comunidade</h3>
<p>
  No Terreo, você não é apenas um usuário, mas parte de uma rede que transforma a forma como as pessoas enxergam os bairros. Sua participação é essencial para criar um espaço colaborativo e cheio de informações valiosas. 
  Comece hoje mesmo a compartilhar suas experiências, descobrir novas possibilidades e ajudar outras pessoas a tomarem decisões mais acertadas.
</p>
<p>
  Seja um morador, visitante ou um entusiasta por urbanismo e qualidade de vida, o Terreo está aqui para tornar sua jornada mais simples e informada.
</p>

        </div>
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
        <div className="Contato-content">
          <h2>Entre em Contato</h2>
          <p>Quer saber mais sobre o projeto? Envie suas dúvidas ou sugestões!</p>
          <form className="ContatoForm">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." required></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Inicio;