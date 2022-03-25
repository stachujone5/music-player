import { FaArrowRight, FaArrowLeft, FaHeart, FaExternalLinkAlt, FaPlay, FaPause } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { playerAction, playerState } from '../../hooks/usePlayer'
import { ACTIONS } from '../../hooks/actions'
import { RefObject } from 'react'
import classes from './Controls.module.scss'

interface ControlsProps {
	dispatch: React.Dispatch<playerAction>
	state: playerState
	audioRef: RefObject<HTMLAudioElement>
}

export const Controls = ({ dispatch, state, audioRef }: ControlsProps) => {
	const handleNextSong = () => {
		dispatch({ type: ACTIONS.NEXT_SONG })
	}

	const handlePrevSong = () => {
		if (state.goBack) {
			dispatch({ type: ACTIONS.PREV_SONG })
			return
		}
		if (audioRef.current) {
			dispatch({ type: ACTIONS.RESET })
			audioRef.current.currentTime = 0
		}
	}

	const handlePlayToggle = () => {
		dispatch({ type: ACTIONS.TOGGLE_PLAY })
	}

	const handleIsFavourite = (id: number) => {
		const favSong = state.songs.find(song => song.id === id)
		const newSongs = state.songs.filter(song => song.id !== id)

		if (favSong) {
			favSong.isFavourite = !favSong.isFavourite
			newSongs.unshift(favSong)
			newSongs.sort((a, b) => a.id - b.id)
			dispatch({ type: ACTIONS.SET_SONGS, payload: newSongs })
		}
	}

	const formatTime = (time: number) => {
		const seconds: string | number = Math.round(time)
		let newTime
		if (seconds >= 60) {
			newTime = `0${Math.floor(seconds / 60)}:${seconds % 60}`

			if (seconds % 60 < 10) {
				newTime = `0${Math.floor(seconds / 60)}:0${seconds % 60}`
			}
		}
		if (seconds < 10) {
			newTime = `0${Math.floor(seconds / 60)}:0${seconds % 60}`
		}
		if (seconds >= 10 && seconds < 60) {
			newTime = `0${Math.floor(seconds / 60)}:${seconds % 60}`
		}
		return newTime
	}

	return (
		<IconContext.Provider value={{ className: classes.icon }}>
			<p aria-labelledby="Song's full time" className={classes['full-time']}>
				{state.currentSong.length}
			</p>
			<div className={classes.controls}>
				<button
					aria-label='Mark as favourite'
					className={`${classes.btn} ${state.currentSong.isFavourite ? classes.favourite : ''}`}
					onClick={() => handleIsFavourite(state.songIndex)}>
					<FaHeart />
				</button>
				<a
					aria-label='Song link'
					rel='noreferrer'
					target='_blank'
					className={classes.btn}
					href={state.currentSong.link}>
					<FaExternalLinkAlt />
				</a>
				<button aria-label='Previous song' className={classes.btn} onClick={handlePrevSong}>
					<FaArrowLeft />
				</button>
				<button aria-label='Play/Pause' className={classes.btn} onClick={handlePlayToggle}>
					{!state.isPlaying ? <FaPlay /> : <FaPause />}
				</button>
				<button aria-label='Next song' className={classes.btn} onClick={handleNextSong}>
					<FaArrowRight />
				</button>
			</div>
			<p aria-labelledby="Current song's time" className={classes['current-time']}>
				{formatTime(state.time)}
			</p>
		</IconContext.Provider>
	)
}
