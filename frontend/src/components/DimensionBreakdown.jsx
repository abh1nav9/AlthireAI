import React from 'react';

const DimensionBreakdown = ({ interviews }) => {
  const dimensionScores = {};

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

  const dimensions = Object.keys(dimensionScores).map(dimension => ({
    dimension,
    avg_score: dimensionScores[dimension].total / dimensionScores[dimension].count
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Dimension Breakdown</h2>
      <ul className="divide-y divide-gray-200">
        {dimensions.map((dim, index) => (
          <li key={index} className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 transition-all duration-200">
            <span className="text-gray-700 text-lg font-medium">{dim.dimension}</span>
            <span className="text-purple-600 font-semibold">{dim.avg_score.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DimensionBreakdown;
