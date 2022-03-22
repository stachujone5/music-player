import { Container } from './components/container/Container'
import { Controls } from './components/controls/Controls'
import { ImageContainer } from './components/image_container/ImageContainer'
import { Info } from './components/info/Info'
import { Progress } from './components/progress/Progress'
import { usePlayer } from './hooks/usePlayer'

export const App: React.FC = () => {
	const { state, songs, setSongs, dispatch } = usePlayer()
	return (
		<Container>
			<ImageContainer songs={songs} state={state} />
			<Controls songs={songs} setSongs={setSongs} dispatch={dispatch} state={state} />
			<Progress dispatch={dispatch} state={state} songs={songs} />
			<Info songs={songs} state={state} />
		</Container>
	)
}
