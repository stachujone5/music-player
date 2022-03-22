import { playerState } from '../../hooks/usePlayer'
import { songInterface } from '../../songs'
import classes from './Info.module.scss'

interface InfoProps {
	songs: songInterface[]
	state: playerState
}

export const Info = ({ songs, state }: InfoProps) => {
	const currentSong = songs[state.songIndex]
	return (
		<>
			<h2 className={classes.author}>{currentSong.author}</h2>
			<h3 className={classes.title}>{currentSong.title}</h3>
		</>
	)
}
