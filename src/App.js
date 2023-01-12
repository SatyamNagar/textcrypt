import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useEffect, useState } from 'react';
import Alert from "./components/Alert";
import Contact from "./components/Contact";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is on or off
  const [alertMessage, setAlertMessage] = useState('');
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#f2f2f1';
  }, [])



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      setAlertMessage("Dark Mode Enabled!");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#f2f2f1';
      setAlertMessage("Light Mode Enabled!");
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} setOpenContact={setOpenContact} openContact={openContact} />
      <Alert alertMessage={alertMessage} />
      <Contact setOpenContact={setOpenContact} openContact={openContact} />

      <div className="container my-3">
        <TextForm mode={mode} setAlertMessage={setAlertMessage} />
      </div>
    </>
  );
}

export default App;
