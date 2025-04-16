import { useState } from 'react'
import './App.css'

import cat from './assets/cat.webp'
import cheese from './assets/cheese.webp'
import cum from './assets/cum.webp'
import cumming from './assets/cumming.webp'
import devil from './assets/devil.webp'
import hacked from './assets/hacked.webp'
import hitler from './assets/hitler.webp'
import noise from './assets/noise.webp'
import ogar from './assets/ogar.webp'
import sink from './assets/sink.webp'
import wario from './assets/wario.webp'
import weed from './assets/weed.webp'
import { useEffect } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [counter, setCounter] = useState(0)
  const [status, setStatus] = useState('')

  console.log(counter);

  const workerURL = "https://elonmuskdeathwaiters.konsti032003.workers.dev/"

  useEffect(() => {
    fetchCounter()
  }, [])

  async function fetchCounter() {
    try {
      const response = await fetch(workerURL)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      setCounter(await response.text())
    } catch (error) {
      console.error('Error fetching counter:', error)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const response = await fetch(workerURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) {
        throw new Error('Failed to submit email')
      }
      setStatus('Successfully joined the waitlist!')
    } catch (error) {
      console.error('Error submitting email:', error)
      setStatus('Failed to join the waitlist. Please try again.')
    }
  }

  return (
    <div className="App">
      <div className='grid'>
        <img src={cat} alt="cat" className='image' />
        <img src={cheese} alt="cheese" className='image' />
        <img src={cum} alt="cum" className='image' />
        <img src={cumming} alt="cumming" className='image' />
        <img src={devil} alt="devil" className='image' />
        <img src={hacked} alt="hacked" className='image' />
        <img src={hitler} alt="hitler" className='image' />
        <img src={noise} alt="noise" className='image' />
        <img src={ogar} alt="ogar" className='image' />
        <img src={sink} alt="sink" className='image' />
        <img src={wario} alt="wario" className='image' />
        <img src={weed} alt="weed" className='image' />
      </div>
      <div className='form'>
        <h2>Is Elon Musk dead?</h2>
        <h1>No</h1>
        <p>People Waiting: <span id="counter">{counter}</span></p>
        <p>Be the first one to know when he is dead</p>
        <form id="waitlist-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Join Waitlist</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  )
}

export default App
