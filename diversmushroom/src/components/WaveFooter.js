import React from 'react';
import Wave from 'react-wavify';

function WaveFooter() {
    return (
    <>
        <Wave fill='url(#gradient)'
            className="footer__wave"
            paused={false}
            options={{
                height: 160,
                amplitude: 20,
                speed: 0.15,
                points: 3
            }}>
            <defs>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%" stopColor="rgba(212, 175, 55, 0.45)" />
                        <stop offset="90%" stopColor="rgba(255, 0, 0, 0.86)" />
                    </linearGradient>
                </defs>
            </defs>
        </Wave>
    </>
)}

export default WaveFooter;
