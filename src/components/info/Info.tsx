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
			<h2 className={classes.author} aria-describedby='Author'>
				{currentSong.author}
			</h2>
			<h3 className={classes.title} aria-describedby='Title'>
				{currentSong.title}
			</h3>
		</>
	)
}
