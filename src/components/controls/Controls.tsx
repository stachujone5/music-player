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
}

export const Controls = ({ link, songs, setSongs, dispatch, state, length, setWidth }: ControlsProps) => {
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
				<Button className={classes.btn} onClick={handlePrevSong} icon={<FaArrowLeft />} />
				<Button className={classes.btn} onClick={handleNextSong} icon={<FaArrowRight />} />
				<Button className={classes.btn} onClick={handlePlayToggle} icon={!state.isPlaying ? <FaPlay /> : <FaPause />} />
			</div>
			<p className={classes['current-time']}>00:00</p>
		</IconContext.Provider>
	)
}
