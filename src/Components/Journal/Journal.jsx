import { useState } from "react";
import './Journal/index.css';

function Journal() {
    // State to hold the journal entry
    const [entry, setEntry] = useState('');
    const handleSave = () => {
        console.log('Entry saved:', entry);  // Placeholder for saving the entry
        setEntry('');  // Reset the textarea after saving
    };
    return (
        <div className="journal">
            <h3>Activity Journal</h3>
            <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Write your reflections here..."
            />
            <button onClick={handleSave}>Save Entry</button>
        </div>
    );
}
export default Journal;


