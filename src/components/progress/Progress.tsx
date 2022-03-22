import React, { useRef, useEffect } from 'react'
import { playerAction, playerState } from '../../hooks/usePlayer'
import { songInterface } from '../../songs'
import { ACTIONS } from '../../hooks/actions'
import classes from './Progress.module.scss'

interface ProgressProps {
	dispatch: React.Dispatch<playerAction>
	state: playerState
	songs: songInterface[]
}

export const Progress = ({ dispatch, state, songs }: ProgressProps) => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const widthRef = useRef(0)

	useEffect(() => {
		if (state.isPlaying) {
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	})

	useEffect(() => {
		let progressInterval: NodeJS.Timer
		if (state.isPlaying) {
			progressInterval = setInterval(() => {
				widthRef.current = (audioRef.current!.currentTime / audioRef.current!.duration) * 100
				dispatch({ type: ACTIONS.SET_BAR, payload: { width: widthRef.current, time: audioRef.current!.currentTime } })
			}, 100)
		}

		return () => clearInterval(progressInterval)
	}, [state.isPlaying, dispatch])

	const handleEnd = () => {
		dispatch({ type: ACTIONS.NEXT_SONG })
	}

	const handleBar = (e: React.MouseEvent<HTMLDivElement>) => {
		const targetWidth = e.currentTarget.clientWidth
		const clickedWidth = e.nativeEvent.offsetX
		const time = (clickedWidth / targetWidth) * audioRef.current!.duration
		const percentWidth = clickedWidth / targetWidth
		audioRef.current!.currentTime = time
		widthRef.current = percentWidth
		dispatch({ type: ACTIONS.PLAY })
	}

	const currentSong = songs[state.songIndex]

	return (
		<div className={classes.progress} onClick={handleBar} aria-label='Song progress bar'>
			<audio ref={audioRef} src={currentSong.source} onEnded={handleEnd}></audio>
			<div className={classes.inside} style={{ width: `${state.width}%` }}></div>
		</div>
	)
}
