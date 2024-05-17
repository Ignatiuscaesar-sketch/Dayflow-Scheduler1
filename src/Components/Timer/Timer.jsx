import React, { useState, useEffect } from 'react';
import './index.css';

const Timer = ({ initialSeconds }) => {
    const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSecondsRemaining(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && secondsRemaining !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, secondsRemaining]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSecondsRemaining(initialSeconds);
        setIsActive(false);
    };

    const formatTime = () => {
        const hours = Math.floor(secondsRemaining / 3600);
        const minutes = Math.floor((secondsRemaining % 3600) / 60);
        const seconds = secondsRemaining % 60;
        return [hours, minutes, seconds].map(v => v < 10 ? `0${v}` : v).join(':');
    };

    return (
        <div className="timer">
            <div className="time-display">{formatTime()}</div>
            <button onClick={toggleTimer}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
