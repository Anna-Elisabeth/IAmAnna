import React, { useState, useEffect } from 'react';
import styles from './timers.module.css';
import CreateStory from "../Story/CreateStory";
import alarmSound from './alarm.wav';

function Timers3() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); 
    const [hasPlayedAlarm, setHasPlayedAlarm] = useState(false);

    useEffect(() => {
        if (isAnimating) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
            }, 1000);

            const animationTimer = setTimeout(() => {
                setIsAnimating(false);
            }, 300000);

            return () => {
                clearInterval(timer);
                clearTimeout(animationTimer);
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



             <br />
                <h2 aria-label="one minute challenge" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "900px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center" }} >Five Minute Challenge</h2>
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
                            setTimeLeft(300);
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

export default Timers3;