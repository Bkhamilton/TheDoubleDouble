import * as React from 'react';
import logo from '../../../images/Double Double Logo.jpg';
import spotifyIcon from '../../../images/Spotify_Listen.png';
import appleIcon from '../../../images/Apple_Podcast_Listen.svg';
import './TestEpisode.css';


export default function TestEpisode() {
    return (
        <div className='episode-node-outer-container'>
            <div className='episode-node-container'>
                <div className='episode-info-container'>
                    <span className='episode-info-text'>Sep 26 | Season 5 | 1:29:00</span>
                    <h1 className='shadow-text'>2024-2025 Eastern Conference Breakdown</h1>
                    <span className='episode-description'>This year's Eastern Conference Breakdown is here! We like to do one of these every season as weget close to the start of the season, and we start with the East. This episode,...</span>
                    <div className='listen-button-container'>
                        <a href={`https://open.spotify.com/episode/4Hdz8bGfVhAN5jCmxUc5Jg`} target="_blank" rel="noopener noreferrer" className='spotify-button'>
                            <img src={spotifyIcon} alt="Spotify Listen Button"></img>
                        </a>
                        <a href='https://podcasts.apple.com/us/podcast/2024-2025-eastern-conference-breakdown/id1555765326?i=1000670870405' target="_blank" rel="noopener noreferrer" className='apple-podcast-button'>
                            <img src={appleIcon} alt="Apple Podcast Listen Button"></img>
                        </a>
                    </div>
                </div>
                <div className='episode-logo-container'>
                    <img src={logo} alt="Double Double Logo"></img>
                </div>
            </div>        
        </div>

    )
}