import { useState } from 'react'
import { useEffect } from 'react'
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

import cat_cross from './assets/cat_cross.webp'
import cheese_cross from './assets/cheese_cross.webp'
import cum_cross from './assets/cum_cross.webp'
import cumming_cross from './assets/cumming_cross.webp'
import devil_cross from './assets/devil_cross.webp'
import hacked_cross from './assets/hacked_cross.webp'
import hitler_cross from './assets/hitler_cross.webp'
import noise_cross from './assets/noise_cross.webp'
import ogar_cross from './assets/ogar_cross.webp'
import sink_cross from './assets/sink_cross.webp'
import wario_cross from './assets/wario_cross.webp'
import weed_cross from './assets/weed_cross.webp'


function App() {
  const [email, setEmail] = useState('')
  const [counter, setCounter] = useState(0)
  const [status, setStatus] = useState('')
  const [signedup, setSignedup] = useState(false)

  console.log(counter);

  const workerURL = "https://elonmuskdeathwaiters.konsti032003.workers.dev/"

  useEffect(() => {
    // Check if the user has already signed up
    const hasSignedUp = localStorage.getItem('signedup')
    if (hasSignedUp) {
      setSignedup(true)
      setStatus('You have already joined the waitlist!')
    }
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
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) {
        throw new Error('Failed to submit email')
      }
      localStorage.setItem('signedup', 'true')
      setSignedup(true)
      setStatus('Successfully joined the waitlist!')
      setCounter((prevCounter) => parseInt(prevCounter, 10) + 1)
    } catch (error) {
      console.error('Error submitting email:', error)
      setStatus('Failed to join the waitlist. Please try again.')
    }
  }

  function form() {
    return (<>
      <p>Be the first one to know when he is dead</p>
      <p className='smalltext'>Experts predict that signing up reduces Elon Musks lifespan by 1 second</p>
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
    </>)
  }

  function test() {
    return (<p>Test</p>)
  }

  return (
    <div className="App">
      <div className='grid'>
        {signedup ?
          <>
            <img src={cat_cross} alt="cat" className='image' />
            <img src={cheese_cross} alt="cheese" className='image' />
            <img src={cum_cross} alt="cum" className='image' />
            <img src={cumming_cross} alt="cumming" className='image' />
            <img src={devil_cross} alt="devil" className='image' />
            <img src={hacked_cross} alt="hacked" className='image' />
            <img src={hitler_cross} alt="hitler" className='image' />
            <img src={noise_cross} alt="noise" className='image' />
            <img src={ogar_cross} alt="ogar" className='image' />
            <img src={sink_cross} alt="sink" className='image' />
            <img src={wario_cross} alt="wario" className='image' />
            <img src={weed_cross} alt="weed" className='image' />
          </> :
          <>
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
          </>}

      </div>
      <div className='form'>
        <h2>Is Elon Musk dead?</h2>
        <h1>No</h1>
        <p>People Waiting: <span id="counter">{counter}</span></p>
        {signedup ? "" : form()}
        {status && <p>{status}</p>}
      </div>
    </div>
  )
}

export default App
