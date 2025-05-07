import React, { useState } from "react";
import './button.css'; // Assuming this is CSS and not a module

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (text.trim() === "") return;

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
      <button
        className="btn btn-custom-primary shift mx-2 my-1"
        onClick={handleSpeak}
        disabled={isSpeaking || text.trim() === ""}
      >
        {isSpeaking ? "Speaking..." : "Speak Text"}
      </button>
      <button
        className="btn btn-custom-danger mx-2 my-1"
        onClick={handleStop}
        disabled={!isSpeaking}
      >
        Stop Speaking
      </button>
    </>
  );
};

export default TextToSpeech;
