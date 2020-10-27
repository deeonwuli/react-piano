import React, { useEffect } from 'react'
import './App.css'
import AudioPlayer from './keyboard/AudioPlayer'

function App() {
  const audioPlayer = AudioPlayer()

  useEffect(() => {
    audioPlayer.setInstrument('acoustic_grand_piano')
  }, [])

  const handleClick = () => {
    audioPlayer.playNote('C4')
  }

  return (
    <div className="app-container">
      <button onClick={handleClick}>Playyy</button>
    </div>
  );
}

export default App
