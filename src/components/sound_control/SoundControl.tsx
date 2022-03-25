import { RefObject, useEffect, useRef, useState } from 'react'
import classes from './SoundControl.module.scss'

interface SoundControlProps {
	audioRef: RefObject<HTMLAudioElement>
}

export const SoundControl = ({ audioRef }: SoundControlProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [value, setValue] = useState('50')

	const handleSoundChange = () => {
		if (audioRef.current && inputRef.current) {
			audioRef.current.volume = parseFloat(inputRef.current.value) / 100
			setValue(inputRef.current.value)
		}
	}

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 0.5
		}
	}, [audioRef])

	console.log(audioRef.current?.volume)

	return (
		<div className={classes['input-container']}>
			<input type='range' className={classes.input} onChange={handleSoundChange} ref={inputRef} />
			<div className={classes['input-progress']} style={{ width: `${value}%` }}></div>
		</div>
	)
}
