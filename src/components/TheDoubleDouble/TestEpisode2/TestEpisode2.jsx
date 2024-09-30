import * as React from 'react';
import logo from '../../../images/Double Double Logo.jpg';
import spotifyIcon from '../../../images/Spotify_Listen.png';
import appleIcon from '../../../images/Apple_Podcast_Listen.svg';
import './TestEpisode2.css';


export default function TestEpisode2() {
    return (
        <div className='episode-node-outer-container'>
            <div className='episode-node-container'>
                <div className='episode-info-container'>
                    <span className='episode-info-text'>Sep 17 | Season 4 | 1:08:00</span>
                    <h1 className='shadow-text'>2024 Draft Big Picture - Big Man Battle, ROTY Race, and More</h1>
                    <span className='episode-description'>The 2024 Draft class is probably the least respected class out of any year that I have been paying serious attention to basketball. Despite the lack of ...</span>
                    <div className='listen-button-container'>
                        <a href={`https://open.spotify.com/episode/6TZNOgoyAWMidqaZYpOZpF`} target="_blank" rel="noopener noreferrer" className='spotify-button'>
                            <img src={spotifyIcon} alt="Spotify Listen Button"></img>
                        </a>
                        <a href='https://podcasts.apple.com/us/podcast/2024-draft-big-picture-big-man-battle-roty-race-and-more/id1555765326?i=1000669856531' target="_blank" rel="noopener noreferrer" className='apple-podcast-button'>
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