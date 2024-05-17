import React, { useState, useEffect } from 'react';
import './index.css';

const TimeZoneSelector = ({ onTimeZoneChange }) => {
    const [timeZones, setTimeZones] = useState([]);

    useEffect(() => {
        setTimeZones(Intl.supportedValuesOf('timeZone'));
    }, []);

    return (
        <div className="timezone-selector">
            <label htmlFor="timezone-select">Choose a Time Zone:</label>
            <select id="timezone-select" onChange={e => onTimeZoneChange(e.target.value)}>
                {timeZones.map(timeZone => (
                    <option key={timeZone} value={timeZone}>
                        {timeZone.replace(/_/g, ' ').replace('/', ' / ')}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimeZoneSelector;
