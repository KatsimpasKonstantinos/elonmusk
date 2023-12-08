import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  let [counter, updateCounter] = useState(0);

  const workerURL = "https://elonmuskdeathwaiters.konsti032003.workers.dev/";

async function getCounter() {
  const response = await fetch(workerURL, {
    method: 'POST',
  });
  console.log(response);
  updateCounter(await consumeStream(response));
}

  useEffect(() => {
    getCounter();
  }, []);

  
async function putCounter() {
  const response = await fetch(workerURL, {
    method: 'PUT',
  });
  updateCounter(await consumeStream(response));
}

async function consumeStream(response) {
  return await response.text()
}
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          No.
        </h1>
        <p> People waiting: {counter} </p>
        <button onClick={() => putCounter()}> Wait </button>
      </header>
    </div>
  );
}



export default App;
