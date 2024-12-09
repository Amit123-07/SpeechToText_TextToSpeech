import React, { useState } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  const handleTextToSpeech = () => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="text-to-speech-container">
      <textarea
        className="textarea"
        placeholder="Type text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="button button-speak" onClick={handleTextToSpeech}>
        🔊 Convert to Speech
      </button>
    </div>
  );
};

export default TextToSpeech;
