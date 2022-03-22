import { playerState } from '../../hooks/usePlayer'
import { songInterface } from '../../songs'
import classes from './ImageContainer.module.scss'

interface ImageContainerProps {
	songs: songInterface[]
	state: playerState
}

export const ImageContainer = ({ songs, state }: ImageContainerProps) => {
	const currentSong = songs[state.songIndex]

	return (
		<div className={classes['img-container']}>
			<img src={currentSong.img} alt={`Cover of the song: ${currentSong.title}`} />
		</div>
	)
}
