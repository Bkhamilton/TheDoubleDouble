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
                    <span className='episode-info-text'>June 24 | Season 3 | 1:02:38</span>
                    <h1 className='shadow-text'>2023 NBA Draft Review</h1>
                    <span className='episode-description'>The NBA Draft is one of our favorite parts of the NBA Season. We've spent a lot of time over the past researching these prospects and building our own mock drafts, and last night was the night of the draft. In this episode...</span>
                    <div className='listen-button-container'>
                        <a href={`https://open.spotify.com/episode/5XCMWBRbO9ehszSHu7Cr1V?si=f83e825351394db7`} target="_blank" rel="noopener noreferrer" className='spotify-button'>
                            <img src={spotifyIcon} alt="Spotify Listen Button"></img>
                        </a>
                        <a href='https://podcasts.apple.com/us/podcast/2023-nba-draft-review/id1555765326?i=1000618155716' target="_blank" rel="noopener noreferrer" className='apple-podcast-button'>
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