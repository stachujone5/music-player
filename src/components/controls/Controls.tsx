import { FaArrowRight, FaArrowLeft, FaHeart, FaExternalLinkAlt, FaPlay, FaPause } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Button } from '../button/Button'
import classes from './Controls.module.scss'
import { songInterface } from '../../songs'
import { playerAction, playerState } from '../../hooks/usePlayer'
import { ACTIONS } from '../../hooks/actions'

interface ControlsProps {
	songs: songInterface[]
	setSongs: React.Dispatch<React.SetStateAction<songInterface[]>>
	dispatch: React.Dispatch<playerAction>
	state: playerState
}

export const Controls = ({ songs, setSongs, dispatch, state }: ControlsProps) => {
	const currentSong = songs[state.songIndex]

	const handleNextSong = () => {
		dispatch({ type: ACTIONS.NEXT_SONG })
	}

	const handlePrevSong = () => {
		dispatch({ type: ACTIONS.PREV_SONG })
	}

	const handlePlayToggle = () => {
		dispatch({ type: ACTIONS.TOGGLE_PLAY })
	}

	const handleIsFavourite = (id: number) => {
		const favSong = songs.find(song => song.id === id)
		const newSongs = songs.filter(song => song.id !== id)

		if (favSong) {
			favSong.isFavourite = !favSong.isFavourite
			newSongs.unshift(favSong)
			newSongs.sort((a, b) => a.id - b.id)
			setSongs(newSongs)
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
			<p className={classes['full-time']}>{currentSong.length}</p>
			<div className={classes.controls}>
				<Button
					className={`${classes.btn} ${songs[state.songIndex].isFavourite ? classes.favourite : ''}`}
					onClick={() => handleIsFavourite(state.songIndex)}
					icon={<FaHeart />}
				/>
				<a rel='noreferrer' target='_blank' className={classes.btn} href={currentSong.link}>
					<FaExternalLinkAlt />
				</a>
				<Button className={classes.btn} onClick={handlePrevSong} icon={<FaArrowLeft />} />
				<Button className={classes.btn} onClick={handleNextSong} icon={<FaArrowRight />} />
				<Button className={classes.btn} onClick={handlePlayToggle} icon={!state.isPlaying ? <FaPlay /> : <FaPause />} />
			</div>
			<p className={classes['current-time']}>{formatTime(state.time)}</p>
		</IconContext.Provider>
	)
}
