import { RefObject, useRef } from 'react'
import { ACTIONS } from '../../hooks/actions'
import { playerAction, playerState } from '../../hooks/usePlayer'
import classes from './SoundControl.module.scss'

interface SoundControlProps {
	audioRef: RefObject<HTMLAudioElement>
	state: playerState
	dispatch: React.Dispatch<playerAction>
}

export const SoundControl = ({ audioRef, state, dispatch }: SoundControlProps) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleSoundChange = () => {
		if (audioRef.current && inputRef.current) {
			audioRef.current.volume = parseFloat(inputRef.current.value) / 100
			dispatch({ type: ACTIONS.SET_VALUE, payload: inputRef.current.value })
		}
	}

	return (
		<div className={classes['input-container']}>
			<input type='range' className={classes.input} onChange={handleSoundChange} ref={inputRef} value={state.value} />
			<div className={classes['input-progress']} style={{ width: `${state.value}%` }}></div>
		</div>
	)
}
