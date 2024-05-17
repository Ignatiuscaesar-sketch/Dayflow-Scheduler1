import React, { useState } from 'react';
import './index.css';

const AddEvent = ({ onSave }) => {
    const [eventName, setEventName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            name: eventName,
            startTime: startTime,
            duration: parseInt(duration, 10)
        });
        // Reset form
        setEventName('');
        setStartTime('');
        setDuration('');
    };

    return (
        <form className="add-event-form" onSubmit={handleSubmit}>
            <label>
                Event Name:
                <input
                    type="text"
                    value={eventName}
                    onChange={e => setEventName(e.target.value)}
                    required
                />
            </label>
            <label>
                Start Time:
                <input
                    type="time"
                    value={startTime}
                    onChange={e => setStartTime(e.target.value)}
                    required
                />
            </label>
            <label>
                Duration (minutes):
                <input
                    type="number"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEvent;
