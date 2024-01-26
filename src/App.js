import React, { useState, useEffect } from "react";
import './App.css';
import NotDead from "./NotDead.png";
import Dead from "./Dead.png";


function App() {
  const [counter, setCounter] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const isDead = false;

  const workerURL = "https://elonmuskdeathwaiters.konsti032003.workers.dev/";

  async function getCounter() {
    try {
      const response = await fetch(workerURL, {
        method: 'GET',
      });
      setCounter(await consumeStream(response));
    } catch (error) {
      console.error('Error fetching counter:', error);
    }
  }

  useEffect(() => {
    getCounter();
  }, []);

  async function putCounter() {
    try {
      // Disable the button to prevent multiple clicks
      setButtonDisabled(true);

      const response = await fetch(workerURL, {
        method: 'PUT',
      });
      setCounter(await consumeStream(response));
    } catch (error) {
      console.error('Error updating counter:', error);
    }
  }

  async function consumeStream(response) {
    return await response.text();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-container">
          <img
            src={isDead ? Dead : NotDead}
            alt="Profile"
            className={"profile-picture"}
          />
        </div>
        <h1 className={"neon-text-glowing"}>{isDead ? "Yes." : "No."}</h1>
        <p className={"neon-text"}>People waiting: {counter}</p>
        <button onClick={() => putCounter()} disabled={buttonDisabled} className="neon-button">
          Wait
        </button>
      </header>
    </div>
  );
}

export default App;
