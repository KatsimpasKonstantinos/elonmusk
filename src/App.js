import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  let [counter, updateCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          No.
        </h1>
        <p> People waiting: {counter} </p>
        <button onClick="putCounter()"> Wait </button>
      </header>
    </div>
  );
}

const workerURL = "https://elonmuskdeathwaiters.konsti032003.workers.dev/";

async function getCounter() {
  const response = await fetch(workerURL, {
    method: 'POST',
  });
  updateCounter(response.data);
}

async function putCounter() {
  const response = await fetch(workerURL, {
    method: 'PUT',
  });
  updateCounter(response.data);
}

export default App;
