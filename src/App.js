import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          No.
        </h1>
        <p> People waiting: {getCounter()} </p>
      </header>
    </div>
  );
}

const workerURL = "https://elonmuskdeathwaiters.konsti032003.workers.dev/";

function getCounter() {
  const response = await fetch(workerURL, {
    method: 'POST',
  });
  return response.data;
}

function updateCounter() {
  const response = await fetch(workerURL, {
    method: 'PUT',
  });
}

export default App;
