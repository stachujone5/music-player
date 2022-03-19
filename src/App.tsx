import { Container } from './components/container/Container'
import { Controls } from './components/controls/Controls'
import { Info } from './components/info/Info'

export const App: React.FC = () => {
	return (
		<Container>
			<div></div>
			<Controls />
			<Info author='Leondrd Cohen' title='Everybody Knows' />
		</Container>
	)
}
