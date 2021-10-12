import React from 'react';
import './Footer.css'
import WaveFooter from './WaveFooter'
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return(
        <div className="footer">
            <div className="footer__content">
                <div className="socials__wrapper"><SocialIcon url="https://instagram.com/404" className="footer__icon" bgColor="rgba(255, 255, 255, 0.6)"/>
                    <SocialIcon url="https://wechat.com/404" bgColor="rgba(255, 255, 255, 0.6)" className="footer__icon__2" />
                </div>
                <WaveFooter />
                <p className="footer__copyright">
                    DIVERSMUSHROOM &copy;  {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </div>
)}

export default Footer
