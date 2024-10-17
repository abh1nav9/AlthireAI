import React from 'react';

const OverallScore = ({ interviews }) => {
  const totalScores = interviews.reduce((acc, interview) => {
    if (interview.finished_interview_data.length > 0) {
      acc += interview.finished_interview_data[0].evaluation.score;
    }
    return acc;
  }, 0);
  const overallScore = totalScores / interviews.length;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Overall Score</h2>
      <div className="flex justify-center items-center">
        {isNaN(overallScore) ? (
          <p className="text-lg text-gray-500">No scores available</p>
        ) : (
          <div className="bg-purple-600 text-white rounded-full h-24 w-24 flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold">{overallScore.toFixed(2)}</span>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-600 mt-4 text-center">
        {isNaN(overallScore) ? "Complete more interviews to see your score!" : "This is the average score based on completed interviews."}
      </p>
    </div>
  );
};

export default OverallScore;
