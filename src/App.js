import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=> {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#404040';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }}

  return (
    <>
      <Navbar title="Text Analyzer" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm heading="TextForm" mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;