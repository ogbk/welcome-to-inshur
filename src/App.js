import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [picture, setPicture] = useState(undefined);
  const [profile, setProfile] = useState({});

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch('/api');
        const json = await res.json();
        setProfile(json);
        
        const resPic = await fetch('/api/img/ogbu_olu');
        const picBlob = await resPic.blob();
        const pic = await URL.createObjectURL(picBlob);
        setPicture(pic);
      };

      fetchData();
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={picture}  alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
