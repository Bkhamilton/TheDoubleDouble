import * as React from 'react';
import { useState } from 'react';
import instaLogo from '../../../images/Instagram_Logo.png';
import tiktokLogo from '../../../images/Tiktok_Logo_3.png';
import twitterLogo from '../../../images/Twitter_Logo.png';
import spotifyLogo from '../../../images/Spotify_Icon_RGB_Green.png';
import appleLogo from '../../../images/Apple_Podcast_Logo.png';
import googleLogo from '../../../images/Google_Podcast_Logo.png';
import './ContactNode.css';
import axios from 'axios';

export default function ContactNode() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState("");
  
    function handleEmailChange(event) {
        setEmail(event.target.value);
    };
  
    function handleMessageChange(event) {
        setMessage(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form submission from refreshing the page
    
        if (email.trim() === "" && message.trim() === "") {
          setAlert("Email and message are required");
        } else if (email.trim() === "") {
          setAlert("Email is required");
        } else if (message.trim() === "") {
          setAlert("Message is required");
        } else {
          sendEmail();
        }
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
          content: [{ type: 'text/plain', value: `${email} has sent you a message: ${message}` }],
        };
      
        const headers = {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        };
      
        try {
          const response = await axios.post(url, data, { headers });
          console.log(response.data);
          setAlert("Email sent successfully!"); // Set success message if desired
          setEmail(""); // Clear email field after successful submission
          setMessage(""); // Clear message field after successful submission
        } catch (error) {
          console.log(error);
          setAlert("Failed to send email. Please try again."); // Set error message if desired
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
                    <button className='send-email-button' onClick={handleSubmit}>
                        <div>
                            <span className='input-label'>Send Message</span>
                        </div>
                    </button>
                    {alert && <div className="alert"><span className='alert-text'>{alert}</span></div>} {/* Display alert message if present */}
                </form>
            </div>
        </div>
    );
};
