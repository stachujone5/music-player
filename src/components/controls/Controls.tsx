import { FaArrowRight, FaArrowLeft, FaHeart, FaExternalLinkAlt, FaPlay, FaPause } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Button } from '../button/Button'
import classes from './Controls.module.scss'
import { songInterface } from '../../songs'
import { playerAction, playerState } from '../../hooks/usePlayer'

interface ControlsProps {
	songs: songInterface[]
	link: string
	setSongs: React.Dispatch<React.SetStateAction<songInterface[]>>
	dispatch: React.Dispatch<playerAction>
	state: playerState
	length: string
	setWidth: React.Dispatch<React.SetStateAction<number>>
	time: number
	setTime: React.Dispatch<React.SetStateAction<number>>
}

export const Controls = ({
	link,
	songs,
	setSongs,
	dispatch,
	state,
	length,
	setWidth,
	time,
	setTime,
}: ControlsProps) => {
	const handleNextSong = () => {
		dispatch({ type: 'NEXT_SONG' })
		setWidth(0)
	}

	const handlePrevSong = () => {
		dispatch({ type: 'PREV_SONG' })
		setWidth(0)
	}

	const handlePlayToggle = () => {
		dispatch({ type: 'TOGGLE_PLAY' })
	}

	const handleIsFavourite = (id: number) => {
		const currentSong = songs.find(song => song.id === id)
		const newSongs = songs.filter(song => song.id !== id)

		if (currentSong) {
			currentSong.isFavourite = !currentSong.isFavourite
			newSongs.unshift(currentSong)
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
			<p className={classes['full-time']}>{length}</p>
			<div className={classes.controls}>
				<Button
					className={`${classes.btn} ${songs[state.songIndex].isFavourite ? classes.favourite : ''}`}
					onClick={() => handleIsFavourite(state.songIndex)}
					icon={<FaHeart />}
				/>
				<a rel='noreferrer' target='_blank' className={classes.btn} href={link}>
					<FaExternalLinkAlt />
				</a>
				<Button
					className={classes.btn}
					onClick={() => {
						handlePrevSong()
						setTime(0)
					}}
					icon={<FaArrowLeft />}
				/>
				<Button
					className={classes.btn}
					onClick={() => {
						handleNextSong()
						setTime(0)
					}}
					icon={<FaArrowRight />}
				/>
				<Button className={classes.btn} onClick={handlePlayToggle} icon={!state.isPlaying ? <FaPlay /> : <FaPause />} />
			</div>
			<p className={classes['current-time']}>{formatTime(time)}</p>
		</IconContext.Provider>
	)
}
