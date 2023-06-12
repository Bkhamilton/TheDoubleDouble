import * as React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../../images/Double Double Logo.jpg';
import spotifyIcon from '../../../images/Spotify_Listen.png';
import appleIcon from '../../../images/Apple_Podcast_Listen.svg';
import { truncateDescription, convertTime, formatDuration } from '../../Helpers/utils';
import './EpisodeNode.css';


export default function EpisodeNode({ episode }) {

    const [formattedDuration, setFormattedDuration] = useState("");

    const fontSize = episode.name.length < 42 ? "48px" : "42px";

    const [formattedReleaseDate, setFormattedReleaseDate] = useState("");

    useEffect(() => {
        // Update the formattedDuration state
        const durationInMs = episode.duration_ms;
        setFormattedDuration(formatDuration(durationInMs));
    
        // Update the formattedReleaseDate state
        const releaseDate = episode.release_date;
        setFormattedReleaseDate(convertTime(releaseDate));
      }, [episode]);

    return (
        <div className='episode-node-outer-container'>
            <div className='episode-node-container'>
                <div className='episode-info-container'>
                    <span className='episode-info-text'>{formattedReleaseDate} | Season 3 | {formattedDuration}</span>
                    <h1 className='shadow-text' style={{ fontSize }}>{episode.name}</h1>
                    <span className='episode-description'>{truncateDescription(episode.description, 320)}</span>
                    <div className='listen-button-container'>
                        <a href={episode.external_urls.spotify} target="_blank" rel="noopener noreferrer" className='spotify-button'>
                            <img src={spotifyIcon} alt="Spotify Listen Button"></img>
                        </a>
                        <a href='https://podcasts.apple.com/us/podcast/the-chase-down/id1555765326?itsct=podcast_box&itscg=30200' target="_blank" rel="noopener noreferrer" className='apple-podcast-button'>
                            <img src={appleIcon} alt="Apple Podcast Listen Button"></img>
                        </a>
                    </div>
                    <audio controls>
                        <source src={episode.audio_preview_url} type="audio/mpeg" />
                        <track kind="captions" label="English" default />
                        Your browser does not support the audio element.
                    </audio>    
                </div>
                <div className='episode-logo-container'>
                    <img src={logo} alt="Double Double Logo"></img>
                </div>
            </div>        
        </div>

    )
}