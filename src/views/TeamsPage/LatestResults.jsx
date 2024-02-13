// src/views/TeamsPage/LatestResults.jsx
import React from 'react';

const LatestResults = () => {
    // Sample data for latest results
    const sampleResults = [
        { matchName: 'Final Showdown', teamA: 'Team Alpha', teamB: 'Team Omega', score: '2 - 3' },
        { matchName: 'Semi-Final Clash', teamA: 'Team Delta', teamB: 'Team Gamma', score: '1 - 1' },
        // ... more results
    ];

    return (
        <div>
            <h4>Latest Results:</h4>
            <div className="results-container">
                {sampleResults.map((result, index) => (
                    <div key={index} className="match">
                        <h5>{result.matchName}</h5>
                        <p><strong>{result.teamA}</strong> vs <strong>{result.teamB}</strong></p>
                        <p>Score: {result.score}</p>
                        <a href="#" className="btn btn-primary">Match Details</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestResults;
