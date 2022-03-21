import { useRef } from 'react'
import classes from './Progress.module.scss'

interface ProgressProps {
	source: string
	isPlaying: boolean
}

export const Progress = ({ source, isPlaying }: ProgressProps) => {
	const audioRef = useRef<HTMLAudioElement>(null)

	if (isPlaying) {
		audioRef.current?.play()
	} else {
		audioRef.current?.pause()
	}

	return (
		<div className={classes.progress}>
			<audio ref={audioRef} src={source}></audio>
			<div className={classes.inside}></div>
		</div>
	)
}
