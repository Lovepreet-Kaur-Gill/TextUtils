import React from 'react';
import './summary.css';

export default function Summary({ text }) {
    const wordCount = text.trim().split(/\s+/).filter(word => word !== "").length;
    const charCount = text.length;
    const readTime = (wordCount / 200).toFixed(2); // approx 200 WPM

    return (
        <>
        <div className="container my-3">
            <hr/>
            <h2>Your Text Summary</h2>
            <p><strong>{wordCount}</strong> words and <strong>{charCount}</strong> characters</p>
            <p>Estimated read time: <strong>{readTime}</strong> minutes</p>
            <hr/>
            <h2>Preveiw</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
        
    );
}
