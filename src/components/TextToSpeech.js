import React, { useState } from "react";
import Style from './button.css';

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (text === "") {
      alert("Please enter some text first!");
      return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
    setIsSpeaking(true);

    speech.onend = () => {
      setIsSpeaking(false);
    };
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
   <>
      <button className="btn btn-custom-primary shift" onClick={handleSpeak} disabled={isSpeaking}>
        {isSpeaking ? "Speaking..." : "Speak Text"}
      </button>
      <button className="btn btn-custom-danger mx-2" onClick={handleStop} disabled={!isSpeaking}>
        Stop Speaking
      </button>
    </>
  );
};

export default TextToSpeech;
