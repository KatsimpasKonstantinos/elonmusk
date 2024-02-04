import React, { useState, useEffect } from "react";
import './App.css';
import NotDead from "./NotDead.png";
import Dead from "./Dead.png";


function App() {
  const [counter, setCounter] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  var [isDead, setIsDead] = useState();
  const celebrityName = "Elon Musk";

  useEffect(() => {
    async function checkCelebrityStatus(name) {
      const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(name)}&format=json&origin=*`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const pageTitle = data.query.search[0].title;

        const pageUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(pageTitle)}&format=json&origin=*`;
        const pageResponse = await fetch(pageUrl);
        const pageData = await pageResponse.json();
        const pageContent = pageData.parse.text["*"];

        const isPosition = pageContent.indexOf(" is ");
        const wasPosition = pageContent.indexOf(" was ");
        console.log("is: " + isPosition + " was: " + wasPosition);
        const isDeceased = isPosition >= wasPosition;
        console.log(isDeceased);
        setIsDead(isDeceased);
      } catch (error) {
        console.error("Error fetching data from Wikipedia:", error);
        setIsDead(false);
      }
    }

    checkCelebrityStatus(celebrityName);
  }, [celebrityName]);

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
  }, [counter]);

  async function putCounter() {
    try {
      console.log("pressed: " + localStorage.getItem("pressed"))
      if (localStorage.getItem("pressed")) {
        setButtonDisabled(true);
        return;
      }

      setButtonDisabled(true);
      localStorage.setItem("pressed", true);

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
        <h2 className={"neon-text-glowing"}>{celebrityName + " is probably " + (isDead ? "Dead :D" : "NOT Dead")}</h2>
        <p className={"neon-text"}>People waiting: {counter}</p>
        <button onClick={() => putCounter()} disabled={buttonDisabled} className="neon-button">
          Wait
        </button>
      </header>
    </div>
  );
}

export default App;
