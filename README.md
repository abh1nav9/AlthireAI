# Reports Dashboard

## Introduction
The Reports Dashboard is a web application designed to visualize and analyze interview performance metrics. It fetches interview data from an external API and presents it through various interactive components, allowing users to gain insights into interview outcomes, scores, and project analyses. This project aims to enhance understanding of interview metrics and improve decision-making in hiring processes.

## Tech Stack
- **Frontend**: 
  - React.js
  - Tailwind CSS
  - Chart.js

- **Backend**: 
  - Node.js
  - Express.js
  - Axios

- **API**: 
  - External API for interview data (`https://api.althire.ai/assignment/fullstack01`)

## Component Breakdown
- **InterviewStats**: Displays statistics on total, processed, and pending interviews.
- **OverallScore**: Shows the average score based on completed interviews.
- **DimensionBreakdown**: Breaks down the dimensional scores from processed interviews.
- **TemporalPerformance**: Visualizes the problem-solving scores over time using a line chart.
- **ProjectAnalysis**: Analyzes average scores based on project IDs.

## How to Set Up Locally

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [React](https://reactjs.org/docs/getting-started.html)

### Steps to Set Up

1. **Clone the Repository**
   ```bash
   git clone https://github.com/abh1nav9/AlthireAI
   cd AlthireAI
   ```
2. **Install Backend Dependencies Navigate to the backend folder (if applicable) and 
     run:**
   ```bash
   cd backend
   npm install
   ```
3. **Run the Backend Server Start the backend server:**
   ```bash
   node index.js
   ```
   The server will run on http://localhost:3000.

4. **Install Frontend Dependencies Navigate to the frontend folder and run:**
   ```bash
   cd frontend
   npm install
   ```
5. **Run the Frontend Application Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The application will open in your default web browser at http://localhost:5173.
