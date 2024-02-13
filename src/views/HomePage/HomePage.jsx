// src/views/HomePage/HomePage.jsx
import React from 'react';
import homeImage1 from '../../assets/home-image-1.webp';
import homeImage2 from '../../assets/home-image-2.webp';
import UpcomingMatches from './UpcomingMatches';

const HomePage = () => {
    return (
        <main className="container mt-5 pt-5">
            <div className="main-content-area">
                <section className="content-section">
                    <h1>Welcome to LeagueLinqing!</h1>
                    <p>The ultimate platform where competition meets community...</p>
                    <div className="image-container">
                        <img src={homeImage1} alt="Home Image 1" className="img-fluid" />
                        <img src={homeImage2} alt="Home Image 2" className="img-fluid" />
                    </div>
                </section>
                <aside className="aside-container">
                    <UpcomingMatches />
                </aside>
            </div>
        </main>
    );
};

export default HomePage;
