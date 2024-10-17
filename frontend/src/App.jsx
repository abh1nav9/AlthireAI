import React, { useEffect, useState } from 'react';
import InterviewStats from './components/InterviewStats';
import OverallScore from './components/OverallScore';
import DimensionBreakdown from './components/DimensionBreakdown';
import TemporalPerformance from './components/TemporalPerformance';
import ProjectAnalysis from './components/ProjectAnalysis';

const App = () => {
  const [interviewsData, setInterviewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        setInterviewsData(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  if (!interviewsData) {
    return <div className="flex justify-center items-center h-screen text-xl">No data available</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Reports Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <InterviewStats interviews={interviewsData.interviews_list} />
        <OverallScore interviews={interviewsData.interviews_list} />
      </div>
      <div className="grid grid-cols-1 gap-6 mb-8">
        <DimensionBreakdown interviews={interviewsData.interviews_list} />
        <TemporalPerformance interviews={interviewsData.interviews_list} />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <ProjectAnalysis interviews={interviewsData.interviews_list} />
      </div>
    </div>
  );
};

export default App;
