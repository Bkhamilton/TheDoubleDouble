import * as React from 'react';
import instaLogo from '../../../images/Instagram_Logo.png';
import tiktokLogo from '../../../images/TikTok_Logo.png';
import twitterLogo from '../../../images/Twitter_Logo.png';
import spotifyLogo from '../../../images/Spotify_Icon_RGB_Green.png';
import appleLogo from '../../../images/Apple_Podcast_Logo.png';
import googleLogo from '../../../images/Google_Podcast_Logo.png';
import './ContactNode.css';

export default function ContactNode() {

    return (
        <div className="contact-node">
            <div className="social-media">
                <span className='episode-description'>Podcast Links</span>
                <div className='icons-container'>
                    <div className='icon-background'>
                        <a href='https://spotify.com'>
                            <img className='contact-icon' src={spotifyLogo} alt="Spotify Logo"></img>
                        </a>
                    </div>
                    <div className='icon-background'>
                        <a href='https://www.apple.com/apple-podcasts/'>
                            <img className='contact-icon' src={appleLogo} alt="Apple Logo"></img>
                        </a>
                    </div>
                    <div className='icon-background'>
                        <a href='https://podcasts.google.com/'>
                            <img className='contact-icon' src={googleLogo} alt="Google Podcast Logo"></img>
                        </a>
                    </div>
                </div>
                <span className='episode-description'>Social Media Links</span>
                <div className='icons-container'>
                    <div className='icon-background'>
                        <a href='https://tiktok.com'>
                            <img className='contact-icon' src={tiktokLogo} alt="TikTok Logo"></img>
                        </a>
                    </div>
                    <div className='icon-background'>
                        <a href="https://instagram.com">
                            <img className='contact-icon' src={instaLogo} alt="Instagram Logo"></img>
                        </a>
                    </div>
                    <div className='icon-background'>
                        <a href="https://twitter.com">
                            <img className='contact-icon' src={twitterLogo} alt="Twitter Logo"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <form>
                <div className="input-wrapper">
                    <label htmlFor="email"><span className='input-label'>Email:</span></label>
                    <input className='input-text-field' type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="message"><span className='input-label'>Message:</span></label>
                    <textarea className='input-text-field input-message' id="message" name="message" placeholder="Your message" required />
                </div>
                <button className='send-email-button'>
                    <div>
                        <span className='input-label'>Send Message</span>
                    </div>
                </button>
                </form>
            </div>
        </div>
    );
};
