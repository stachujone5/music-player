import React, { useRef, useEffect, RefObject } from 'react'
import { playerAction, playerState } from '../../hooks/usePlayer'
import { ACTIONS } from '../../hooks/actions'
import classes from './Progress.module.scss'

interface ProgressProps {
	dispatch: React.Dispatch<playerAction>
	state: playerState
	audioRef: RefObject<HTMLAudioElement>
}

export const Progress = ({ dispatch, state, audioRef }: ProgressProps) => {
	const widthRef = useRef(0)

	useEffect(() => {
		if (state.isPlaying) {
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	})

	useEffect(() => {
		if (state.isPlaying) {
			const progressInterval: NodeJS.Timer = setInterval(() => {
				widthRef.current = (audioRef.current!.currentTime / audioRef.current!.duration) * 100
				dispatch({
					type: ACTIONS.SET_BAR,
					payload: { width: widthRef.current, time: audioRef.current!.currentTime },
				})
				if (state.time > 2) {
					dispatch({ type: ACTIONS.GO_BACK })
				}
			}, 100)
			return () => clearInterval(progressInterval)
		}
	}, [state.isPlaying, dispatch, audioRef, state.time])

	useEffect(() => {
		window.addEventListener('keydown', e => {
			if (e.code === 'Space') {
				dispatch({ type: ACTIONS.TOGGLE_PLAY })
			}
			if (e.code === 'ArrowRight') {
				dispatch({ type: ACTIONS.PLAY })
				audioRef.current!.currentTime = audioRef.current!.currentTime + 5
			}
			if (e.code === 'ArrowLeft') {
				dispatch({ type: ACTIONS.PLAY })
				audioRef.current!.currentTime = audioRef.current!.currentTime - 5
			}
		})
	}, [dispatch, audioRef])

	const handleBar = (e: React.MouseEvent<HTMLDivElement>) => {
		const targetWidth = e.currentTarget.clientWidth
		const clickedWidth = e.nativeEvent.offsetX
		const time = (clickedWidth / targetWidth) * audioRef.current!.duration
		const percentWidth = clickedWidth / targetWidth
		audioRef.current!.currentTime = time
		widthRef.current = percentWidth
		dispatch({ type: ACTIONS.PLAY })
	}

	return (
		<div className={classes.progress} onClick={handleBar} aria-label='Song progress bar'>
			<div className={classes.inside} style={{ width: `${state.width}%` }}></div>
		</div>
	)
}
