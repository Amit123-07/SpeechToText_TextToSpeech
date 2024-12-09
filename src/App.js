import React from "react";
import SpeechToText from "./components/SpeechToText";
import TextToSpeech from "./components/TextToSpeech";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Welcome to World of Coders</h1>
      <SpeechToText />
      <TextToSpeech />
    </div>
  );
}

export default App;
