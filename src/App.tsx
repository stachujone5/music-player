import { Controls } from './components/controls/Controls'
import { ImageContainer } from './components/image_container/ImageContainer'
import { Info } from './components/info/Info'
import { Progress } from './components/progress/Progress'
import { SoundControl } from './components/sound_control/SoundControl'
import { usePlayer } from './hooks/usePlayer'
import { useRef } from 'react'
import classes from './App.module.scss'
import { ACTIONS } from './hooks/actions'

export const App = () => {
	const { state, dispatch } = usePlayer()

	const audioRef = useRef<HTMLAudioElement>(null)

	const handleEnd = () => {
		dispatch({ type: ACTIONS.NEXT_SONG })
	}

	return (
		<div className={classes.container}>
			<audio ref={audioRef} onEnded={handleEnd} src={state.currentSong.source}></audio>
			<SoundControl audioRef={audioRef} />
			<ImageContainer state={state} />
			<Controls dispatch={dispatch} state={state} audioRef={audioRef} />
			<Progress dispatch={dispatch} state={state} audioRef={audioRef} />
			<Info state={state} />
		</div>
	)
}
