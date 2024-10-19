import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const DimensionBreakdown = ({ interviews }) => {
  const dimensionScores = {};

  // Collect dimension scores from interviews
  interviews.forEach(interview => {
    if (interview.status === 'processed') {
      interview.finished_interview_data[0].evaluation.dimensional_scores.forEach(dim => {
        if (!dimensionScores[dim.dimension]) {
          dimensionScores[dim.dimension] = { total: 0, count: 0 };
        }
        dimensionScores[dim.dimension].total += dim.score;
        dimensionScores[dim.dimension].count += 1;
      });
    }
  });

  // Prepare data for the chart
  const dimensions = Object.keys(dimensionScores).map(dimension => ({
    dimension,
    avg_score: dimensionScores[dimension].total / dimensionScores[dimension].count
  }));

  const data = {
    labels: dimensions.map(dim => dim.dimension), // Dimension names as labels
    datasets: [
      {
        label: 'Average Score',
        data: dimensions.map(dim => dim.avg_score), // Corresponding average scores
        backgroundColor: 'rgba(93, 112, 255, 0.6)', // Color for the bars
        borderColor: 'rgba(93, 112, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dimension Breakdown (Average Scores)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5, // Assuming the max score is 5
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Dimension Breakdown</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DimensionBreakdown;
  