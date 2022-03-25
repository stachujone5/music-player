import { RefObject } from 'react'

import classes from './SoundControl.module.scss'

interface SoundControlProps {
	audioRef: RefObject<HTMLAudioElement>
}

export const SoundControl = ({ audioRef }: SoundControlProps) => {
	const handleSound = () => {
		if (audioRef.current) audioRef.current.currentTime += 10
	}

	return (
		<div onClick={handleSound} className={classes.soundControl}>
			a
		</div>
	)
}
