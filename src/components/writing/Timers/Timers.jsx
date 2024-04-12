import React, { useState, useEffect } from 'react';
import styles from './timers.module.css';

function Timers() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (isAnimating) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
            }, 1000);

            const animationTimer = setTimeout(() => {
                setIsAnimating(false);
            }, 60000);

            return () => {
                clearInterval(timer);
                clearTimeout(animationTimer);
            };
        }
    }, [isAnimating]);

    return (
        <div>
            <h1>Time...to Write</h1>
            <h2>One Minute Challenge</h2>

            <button
                className={styles.startButton}
                onClick={() => {
                    if (!isAnimating) {
                        setIsAnimating(true);
                        setTimeLeft(60);
                    } else {
                        setIsAnimating(false);
                    }
                }}
            >
                {isAnimating ? 'Stop Writing' : 'Start Writing'}
            </button>

            <div
                 className={`${styles.hourglass} ${isAnimating ? styles.animate : styles.paused}`}
            ></div>
            {timeLeft === 0 && <p>Time's up! Alarm sound here if possible</p>}

            <p>Time Left: {timeLeft} seconds</p>
        </div>
    );
};

export default Timers;