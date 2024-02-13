// src/views/TeamsPage/TeamsPage.jsx
import React, { useState, useEffect } from 'react';
import TeamRow from './TeamRow';
import LatestResults from './LatestResults';

const TeamsPage = () => {
    const [teams, setTeams] = useState([]);
    const [notification, setNotification] = useState(null); 

    useEffect(() => {
        fetch('/teams.json')
            .then(response => response.json())
            .then(data => setTeams(data))
            .catch(error => console.error('Error loading teams:', error));
    }, []);

    const handleDeleteTeam = (teamName) => {
        setTeams(teams.filter(team => team.name !== teamName));
        // Set notification
        setNotification(`Team ${teamName} deleted!`);
        // Auto dismiss notification after a delay (e.g., 5000ms)
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    };

    return (
        <main className="container mt-5 pt-5">
            {notification && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {notification}
                    <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={() => setNotification(null)}></button>
                </div>
            )}
            <div className="main-content-area">
                <section className="content-section">
                    <h2>Teams</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Coach Name</th>
                                <th>Coach Phone</th>
                                <th># of Players</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map(team => (
                                <TeamRow key={team.id} team={team} onDelete={handleDeleteTeam} />
                            ))}
                        </tbody>
                    </table>
                </section>
                <aside className="aside-container">
                    <LatestResults />
                </aside>
            </div>
        </main>
    );
};

export default TeamsPage;

