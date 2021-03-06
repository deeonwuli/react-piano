import SoundFontPlayer from 'soundfont-player'
import AudioContext from './AudioContext'

const NullSoundFontPlayerNoteAudio = {
    stop() {}
}

const NullSoundFontPlayer = {
    play() {
      return NullSoundFontPlayerNoteAudio
    }
}

const AudioPlayer = () => {
    const audioContext = AudioContext && new AudioContext()

    let soundPlayer = NullSoundFontPlayer

    const Player = {
        setInstrument(instrumentName) {
            SoundFontPlayer.instrument(audioContext, instrumentName)
            .then(soundfontPlayer => {
                soundPlayer = soundfontPlayer
            })
            .catch(e => {
                soundPlayer = NullSoundFontPlayer
            })
        },
        playNote(note) {
            soundPlayer.play(note)
        }
    }
    return Player
}

export default AudioPlayer