import * as React from 'react';
import instaLogo from '../../../images/Instagram_Logo.png';
import tiktokLogo from '../../../images/Tiktok_Logo_3.png';
import twitterLogo from '../../../images/Twitter_Logo.png';
import spotifyLogo from '../../../images/Spotify_Icon_RGB_Green.png';
import appleLogo from '../../../images/Apple_Podcast_Logo.png';
import './Socials.css';

export default function Socials() {
    return (
        <div className="socials-container">
          <a href="https://open.spotify.com/show/6HKVei1HZ3XodZkO5KkEK3" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={spotifyLogo} alt="Spotify Logo" className="social-icon" />
          </a>
          <a href="https://podcasts.apple.com/us/podcast/the-chase-down/id1555765326?itsct=podcast_box&itscg=30200" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={appleLogo} alt="Apple Podcast Logo" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com/@doubledoublepod" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={tiktokLogo} alt="TikTok Logo" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/thedoubledoublepod/" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={instaLogo} alt="Instagram Logo" className="social-icon" />
          </a>
          <a href="https://twitter.com/thedoubl2" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter Logo" className="social-icon" />
          </a>
        </div>
    );
};
