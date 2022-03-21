import { useRef, useEffect } from 'react'
import { playerAction } from '../../hooks/usePlayer'
import classes from './Progress.module.scss'

interface ProgressProps {
	source: string
	isPlaying: boolean
	width: number
	setWidth: React.Dispatch<React.SetStateAction<number>>
	setTime: React.Dispatch<React.SetStateAction<number>>
	dispatch: React.Dispatch<playerAction>
}

export const Progress = ({ source, isPlaying, width, setWidth, setTime, dispatch }: ProgressProps) => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const widthRef = useRef(0)
	useEffect(() => {
		if (isPlaying) {
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	})

	useEffect(() => {
		let progressInterval: NodeJS.Timer
		if (isPlaying) {
			progressInterval = setInterval(() => {
				widthRef.current = (audioRef.current!.currentTime / audioRef.current!.duration) * 100
				setWidth(widthRef.current)
				setTime(audioRef.current!.currentTime)
			}, 1000)
		}

		return () => clearInterval(progressInterval)
	}, [isPlaying, setWidth, setTime])

	const handleEnd = () => {
		dispatch({ type: 'NEXT_SONG' })
		setWidth(0)
		setTime(0)
	}

	return (
		<div className={classes.progress}>
			<audio ref={audioRef} src={source} onEnded={handleEnd}></audio>
			<div className={classes.inside} style={{ width: `${width}%` }}></div>
		</div>
	)
}
