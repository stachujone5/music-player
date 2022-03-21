import { useContext, useState } from 'react'
import { Container } from './components/container/Container'
import { Controls } from './components/controls/Controls'
import { ImageContainer } from './components/image_container/ImageContainer'
import { Info } from './components/info/Info'
import { Progress } from './components/progress/Progress'
import { AppContext } from './contexts/AppContext'
import { SONGS, songInterface } from './songs'

export const App: React.FC = () => {
	const { state } = useContext(AppContext)
	const [songs, setSongs] = useState<songInterface[]>(SONGS)

	return (
		<Container>
			<ImageContainer img={songs[state.songIndex].img} />
			<Controls link={songs[state.songIndex].link} songs={songs} setSongs={setSongs} />
			<Progress source={songs[state.songIndex].source} isPlaying={state.isPlaying} />
			<Info author={songs[state.songIndex].author} title={songs[state.songIndex].title} />
		</Container>
	)
}
