import { playerState } from '../../hooks/usePlayer'
import classes from './Info.module.scss'

interface InfoProps {
	state: playerState
}

export const Info = ({ state }: InfoProps) => {
	return (
		<>
			<h2 className={classes.author} aria-labelledby='Author'>
				{state.currentSong.author}
			</h2>
			<h3 className={classes.title} aria-labelledby='Title'>
				{state.currentSong.title}
			</h3>
		</>
	)
}
