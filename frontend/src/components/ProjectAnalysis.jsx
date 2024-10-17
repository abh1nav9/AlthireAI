import React from 'react';

const ProjectAnalysis = ({ interviews }) => {
  const projects = {};

  interviews.forEach(interview => {
    if (interview.status === 'processed') {
      const projectId = interview.project_id;
      const score = interview.finished_interview_data[0].evaluation.score;

      if (!projects[projectId]) {
        projects[projectId] = { total: 0, count: 0 };
      }
      projects[projectId].total += score;
      projects[projectId].count += 1;
    }
  });

  const projectData = Object.keys(projects).map(projectId => ({
    project_id: projectId,
    avg_score: projects[projectId].total / projects[projectId].count
  }));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Project-Based Analysis</h2>
      <ul className="space-y-4">
        {projectData.map(project => (
          <li key={project.project_id} className="bg-gray-50 p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-100 transition-shadow duration-300">
            <span className="text-lg font-medium text-gray-600">Project ID: {project.project_id}</span>
            <span className={`text-2xl font-bold ${project.avg_score > 75 ? 'text-green-600' : project.avg_score > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
              {project.avg_score.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectAnalysis;
