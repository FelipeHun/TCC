import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Importando o Header
import Inicio from './Pages/Inicio'; // Página de Início
import Avaliacoes from './Pages/Avaliacoes'; // Página de Avaliações
import Padrao from './Pages/padrao';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header /> {/* O Header será exibido em todas as páginas */}
      
      <Routes>
        {/* Definindo a rota para a página inicial */}
        <Route path="/" element={<Inicio />} />
        
        {/* Definindo a rota para a página de avaliações */}
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/padrao" element={<Padrao />} />
      </Routes>

      <footer>
        <p>&copy; 2024 Terreo. Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
};

export default App;
