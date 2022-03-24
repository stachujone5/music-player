import { Controls } from './components/controls/Controls'
import { ImageContainer } from './components/image_container/ImageContainer'
import { Info } from './components/info/Info'
import { Progress } from './components/progress/Progress'
import { usePlayer } from './hooks/usePlayer'
import classes from './App.module.scss'

export const App: React.FC = () => {
	const { state, dispatch } = usePlayer()

	return (
		<div className={classes.container}>
			<ImageContainer state={state} />
			<Controls dispatch={dispatch} state={state} />
			<Progress dispatch={dispatch} state={state} />
			<Info state={state} />
		</div>
	)
}
