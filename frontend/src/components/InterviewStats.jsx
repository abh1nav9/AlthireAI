import React from 'react';

const InterviewStats = ({ interviews }) => {
  const processedInterviews = interviews.filter(interview => interview.status === 'processed');
  const pendingInterviews = interviews.filter(interview => interview.status === 'pending');

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Interview Statistics</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100 transition-all duration-200">
          <span className="text-lg font-medium text-gray-600">Total Interviews</span>
          <span className="text-2xl font-bold text-gray-900">{interviews.length}</span>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100 transition-all duration-200">
          <span className="text-lg font-medium text-gray-600">Processed Interviews</span>
          <span className="text-2xl font-bold text-green-600">{processedInterviews.length}</span>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100 transition-all duration-200">
          <span className="text-lg font-medium text-gray-600">Pending Interviews</span>
          <span className="text-2xl font-bold text-yellow-600">{pendingInterviews.length}</span>
        </div>
      </div>
    </div>
  );
};
  
export default InterviewStats;
