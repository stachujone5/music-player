import { Container } from './components/container/Container'
import { Controls } from './components/controls/Controls'
import { ImageContainer } from './components/image_container/ImageContainer'
import { Info } from './components/info/Info'
import { Progress } from './components/progress/Progress'
import { usePlayer } from './hooks/usePlayer'

export const App: React.FC = () => {
	const { state, songs, setSongs, dispatch, width, setWidth, time, setTime } = usePlayer()
	const currentSong = songs[state.songIndex]
	return (
		<Container>
			<ImageContainer img={currentSong.img} />
			<Controls
				link={currentSong.link}
				songs={songs}
				setSongs={setSongs}
				dispatch={dispatch}
				state={state}
				length={currentSong.length}
				setWidth={setWidth}
				time={time}
				setTime={setTime}
			/>
			<Progress
				source={currentSong.source}
				isPlaying={state.isPlaying}
				width={width}
				setWidth={setWidth}
				setTime={setTime}
				dispatch={dispatch}
			/>
			<Info author={currentSong.author} title={currentSong.title} />
		</Container>
	)
}
