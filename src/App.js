import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const workerURL = "https://elonmuskdeathwaiters.konsti032003.workers.dev/";

  async function getCounter() {
    try {
      const response = await fetch(workerURL, {
        method: 'POST',
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
    } finally {
      // Re-enable the button after the request is complete
      setButtonDisabled(false);
    }
  }

  async function consumeStream(response) {
    return await response.text();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>No.</h1>
        <p>People waiting: {counter}</p>
        <button onClick={() => putCounter()} disabled={buttonDisabled} className="wait-button">
          Wait
        </button>
      </header>
    </div>
  );
}

export default App;
