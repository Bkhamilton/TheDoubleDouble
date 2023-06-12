import * as React from 'react';
import { useState } from 'react';
import instaLogo from '../../../images/Instagram_Logo.png';
import tiktokLogo from '../../../images/TikTok_Logo_3.png';
import twitterLogo from '../../../images/Twitter_Logo.png';
import spotifyLogo from '../../../images/Spotify_Icon_RGB_Green.png';
import appleLogo from '../../../images/Apple_Podcast_Logo.png';
import googleLogo from '../../../images/Google_Podcast_Logo.png';
import './ContactNode.css';
import axios from 'axios';

export default function ContactNode() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    function handleEmailChange(event) {
        setEmail(event.target.value);
    };
  
    function handleMessageChange(event) {
        setMessage(event.target.value);
    };

    function handleSubmit() {

    }

    const sendEmail = async () => {
        const apiKey = process.env.SENGRID_KEY;
        const url = 'https://api.sendgrid.com/v3/mail/send';
      
        const data = {
          personalizations: [
            {
              to: [{ email: 'thedoubledoublepod@gmail.com' }],
              subject: 'New Message',
            },
          ],
          from: { email: email },
          content: [{ type: 'text/plain', value: message }],
        };
      
        const headers = {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        };
      
        try {
          const response = await axios.post(url, data, { headers });
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <div className="contact-node">
            <div className="social-media">
                <span className='episode-description'>Podcast Links</span>
                <div className='icons-container'>
                    <div className='icon-background'>
                        <a href='https://open.spotify.com/show/6HKVei1HZ3XodZkO5KkEK3' target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src={spotifyLogo} alt="Spotify Logo"></img>
                        </a>
                    </div>
                    <div className='icon-background'>
                        <a href='https://podcasts.apple.com/us/podcast/the-chase-down/id1555765326?itsct=podcast_box&itscg=30200' target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src={appleLogo} alt="Apple Logo"></img>
                        </a>
                    </div>
                    <div className='icon-background'>
                        <a href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80MmFhYzgxOC9wb2RjYXN0L3Jzcw==' target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src={googleLogo} alt="Google Podcast Logo"></img>
                        </a>
                    </div>
                </div>
                <span className='episode-description'>Social Media Links</span>
                <div className='icons-container'>
                    <div className='icon-background'>
                        <a href='https://www.tiktok.com/@doubledoublepod' target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src={tiktokLogo} alt="TikTok Logo"></img>
                        </a>
                    </div>
                    <div className='icon-background'>
                        <a href="https://www.instagram.com/thedoubledoublepod/" target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src={instaLogo} alt="Instagram Logo"></img>
                        </a>
                    </div>
                    <div className='icon-background'>
                        <a href="https://twitter.com/thedoubl2" target="_blank" rel="noopener noreferrer">
                            <img className='contact-icon' src={twitterLogo} alt="Twitter Logo"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="email"><span className='input-label'>Email:</span></label>
                        <input
                            className='input-text-field'
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="message"><span className='input-label'>Message:</span></label>
                        <textarea
                            className='input-text-field input-message'
                            id="message"
                            name="message"
                            placeholder="Your message"
                            value={message}
                            onChange={handleMessageChange}
                            required
                        />
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
