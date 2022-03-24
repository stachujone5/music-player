import { playerState } from '../../hooks/usePlayer'
import classes from './ImageContainer.module.scss'

interface ImageContainerProps {
	state: playerState
}

export const ImageContainer = ({ state }: ImageContainerProps) => {
	return (
		<div className={classes['img-container']}>
			<img src={state.currentSong.img} alt={`Cover of the song: ${state.currentSong.title}`} />
		</div>
	)
}
