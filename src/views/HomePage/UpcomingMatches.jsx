// /src/views/HomePage/UpcomingMatches.jsx
import React from 'react';

const UpcomingMatches = () => {
    return (
        <aside>
            <h4>Upcoming Matches:</h4>
            <div className="schedule-container">
                {/* Match 1 */}
                <div className="match">
                    <div className="match-info">
                        <div className="match-details">
                            <span className="match-date">Feb 10, 2024</span>
                            <span className="match-time">7:00 PM</span>
                        </div>
                        <div className="teams">
                            <span className="team-name">Team India</span>
                            <span className="vs">vs</span>
                            <span className="team-name">Team Alpha</span>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary btn-sm">View Details</a>
                </div>

                {/* Match 2 */}
                <div className="match">
                    <div className="match-info">
                        <div className="match-details">
                            <span className="match-date">Feb 12, 2024</span>
                            <span className="match-time">6:00 PM</span>
                        </div>
                        <div className="teams">
                            <span className="team-name">Team Bravo</span>
                            <span className="vs">vs</span>
                            <span className="team-name">Team Delta</span>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary btn-sm">View Details</a>
                </div>
                {/* More matches... */}
            </div>
        </aside>
    );
}

export default UpcomingMatches;
