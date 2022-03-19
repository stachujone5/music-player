import { Container } from './components/container/Container'
import { Controls } from './components/controls/Controls'
import { ImageContainer } from './components/image_container/ImageContainer'
import { Info } from './components/info/Info'

export const App: React.FC = () => {
	return (
		<Container>
			<ImageContainer img='https://4kwallpapers.com/images/walls/thumbs_2t/1455.jpg' />
			<Controls link='' />
			<Info author='Leonard Cohen' title='Everybody Knows' />
		</Container>
	)
}
