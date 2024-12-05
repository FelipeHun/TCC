// src/components/Graphs.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrando os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graphs = ({ data }) => {
  const chartData = {
    labels: ['Segurança', 'Lazer', 'Transporte'],
    datasets: [{
      label: 'Avaliação do Bairro',
      data: data,
      backgroundColor: 'rgba(92, 107, 192, 0.5)', // Cor do gráfico
      borderColor: '#5C6BC0', // Cor da borda
      borderWidth: 1,
    }],
  };

  return (
    <div className="graphs">
      <h2>Gráficos de Avaliação</h2>
      <Bar key={JSON.stringify(data)} data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default Graphs;
