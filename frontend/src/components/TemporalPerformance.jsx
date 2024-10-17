import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const TemporalPerformance = ({ interviews }) => {
  const processedInterviews = interviews.filter(interview => interview.status === 'processed');

  const dates = processedInterviews.map(interview => 
    new Date(interview.interview_start_at * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  );
  
  const problemSolvingScores = processedInterviews.map(interview => {
    const dimension = interview.finished_interview_data[0].evaluation.dimensional_scores.find(dim => dim.dimension === 'Problem Solving');
    return dimension ? dimension.score : 0;
  });

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Problem Solving Score',
        data: problemSolvingScores,
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.2)', // Light purple
        borderColor: 'rgba(99, 102, 241, 1)', // Deep purple
        tension: 0.3, // Smoother line
        pointBackgroundColor: 'rgba(99, 102, 241, 1)', // Point color
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#4A5568', // Dark tooltip background
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 4,
        caretSize: 6,
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Score',
          color: '#4A5568', // Darker gray for labels
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
          color: '#4A5568',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Temporal Performance</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TemporalPerformance;
