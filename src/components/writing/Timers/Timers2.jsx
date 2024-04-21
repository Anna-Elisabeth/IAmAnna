import React, { useState, useEffect, useRef } from 'react';
import styles from './timers.module.css';
import CreateStory from "../Story/CreateStory";
import alarmSound from './alarm.wav';

function Timers2() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [hasPlayedAlarm, setHasPlayedAlarm] = useState(false);
    
    // an attempt to sort the timer animation issue - more work required
    
    const animationTimerRef = useRef();

    useEffect(() => {
        if (isAnimating) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
            }, 1000);

            animationTimerRef.current = setTimeout(() => {
                setIsAnimating(false);
            }, 30000);

            return () => {
                clearInterval(timer);
                clearTimeout(animationTimerRef.current);
            };
        }
    }, [isAnimating]);

    useEffect(() => {
        if (timeLeft === 0 && !hasPlayedAlarm) { // Check if the alarm has been played
            const alarm = new Audio(alarmSound);
            alarm.play();
            setHasPlayedAlarm(true); // Set the alarm as played
        }
    }, [timeLeft, hasPlayedAlarm]);

    return (
        <div>
            <div className={styles.timerPage}>



                <h1 aria-label="writing time" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "900px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center" }} >Time...to Write</h1>
                <br />
                <h2 aria-label="one minute challenge" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "900px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center" }} >30 Second Challenge</h2>
                <br />


                <button
                    style={{
                        border: "3px solid #213047", // Thick border with color #213047
                        borderRadius: "5px",
                        padding: "10px",
                        fontFamily: "Verdana, sans-serif", // Verdana font
                        fontWeight: "bold", // Bold text
                        marginLeft: "20px",
                        backgroundColor: "white" // White background color 
                    }}






                    className={styles.startButton}
                    onClick={() => {
                        if (!isAnimating) {
                            setIsAnimating(true);
                            setTimeLeft(30);
                        } else {
                            setIsAnimating(false);
                            clearTimeout(animationTimerRef.current);
                        }
                    }}
                >
                    {isAnimating ? 'Stop Writing' : 'Start Writing'}
                </button>

                <div
                    className={`${styles.hourglass} ${isAnimating ? styles.animate : styles.paused}`}
                >
                    <div className={`${isAnimating ? styles.animate : styles.paused}`}></div>
                    <div className={`${isAnimating ? styles.animate : styles.paused}`}></div>
                </div>
                {timeLeft === 0 && <h4 style={{ marginLeft: "50px", marginTop: "50px", width: "900px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center" }}



                >Time's up!</h4>}

                <p style={{



                    border: "3px solid #213047", // Thick border with color #213047
                    borderRadius: "5px",
                    padding: "10px",
                    fontFamily: "Verdana, sans-serif", // Verdana font
                    fontWeight: "bold", // Bold text
                    marginLeft: "20px",
                    backgroundColor: "white" // White background color
                }}




                >Time Left: {timeLeft} seconds</p>
                <CreateStory />
            </div>
        </div>
    );
};

export default Timers2;