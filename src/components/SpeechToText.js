import React, { useState } from "react";

const SpeechToText = () => {
  const [text, setText] = useState("");
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return <p>Speech Recognition is not supported in this browser.</p>;
  }

  const recognition = new SpeechRecognition();

  // Start Speech Recognition
  const startListening = () => {
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };
  };

  // Clear the displayed text
  const clearText = () => setText("");

  return (
    <div className="speech-container">
      <button className="button button-start" onClick={startListening}>
        🎙️ Start Listening
      </button>
      <div className="result">
        <p>{text || "Text will appear here..."}</p>
      </div>
      {text && (
        <button className="button button-clear" onClick={clearText}>
          ❌ Clear Text
        </button>
      )}
    </div>
  );
};

export default SpeechToText;
