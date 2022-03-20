import { Container } from './components/container/Container'
import { Controls } from './components/controls/Controls'
import { ImageContainer } from './components/image_container/ImageContainer'
import { Info } from './components/info/Info'
import { Progress } from './components/progress/Progress'

export const App: React.FC = () => {
	return (
		<Container>
			<ImageContainer img='https://4kwallpapers.com/images/walls/thumbs_2t/1455.jpg' />
			<Controls link='' />
			<Progress />
			<Info author='Leonard Cohen' title='Everybody Knows' />
		</Container>
	)
}
