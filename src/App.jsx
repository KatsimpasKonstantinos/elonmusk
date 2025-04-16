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

function App() {
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
    </div>
  )
}

export default App
