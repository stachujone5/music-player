import { useRef, useEffect, useState } from 'react'
import classes from './Progress.module.scss'

interface ProgressProps {
	source: string
	isPlaying: boolean
	width: number
	setWidth: React.Dispatch<React.SetStateAction<number>>
}

export const Progress = ({ source, isPlaying, width, setWidth }: ProgressProps) => {
	console.log('render')
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
			}, 1000)
		}

		return () => clearInterval(progressInterval)
	}, [isPlaying, setWidth])

	return (
		<div className={classes.progress}>
			<audio ref={audioRef} src={source}></audio>
			<div className={classes.inside} style={{ width: `${width}%` }}></div>
		</div>
	)
}
