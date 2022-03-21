import { FaArrowRight, FaArrowLeft, FaHeart, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Button } from '../button/Button'
import { useContext, useState } from 'react'
import classes from './Controls.module.scss'
import { AppContext } from '../../contexts/AppContext'

interface ControlsProps {
	link: string
}

export const Controls = ({ link }: ControlsProps) => {
	const [active, setActive] = useState(false)
	const { state, dispatch } = useContext(AppContext)

	const handleActive = () => {
		setActive(prevState => !prevState)
	}

	const handleNextSong = () => {
		dispatch({ type: 'NEXT_SONG' })
	}

	const handlePrevSong = () => {
		dispatch({ type: 'PREV_SONG' })
	}

	const handlePlayToggle = () => {
		dispatch({ type: 'TOGGLE_PLAY' })
	}

	return (
		<IconContext.Provider value={{ className: classes.icon }}>
			<div className={classes.controls}>
				<Button
					className={`${classes.btn} ${active ? classes.active : ''}`}
					onClick={handleActive}
					icon={<FaHeart />}
				/>
				<a className={classes.btn} href={link}>
					<FaExternalLinkAlt />
				</a>
				<Button className={classes.btn} onClick={handlePrevSong} icon={<FaArrowLeft />} />
				<Button className={classes.btn} onClick={handleNextSong} icon={<FaArrowRight />} />
				<Button className={classes.btn} onClick={handlePlayToggle} icon={<FaPlay />} />
			</div>
		</IconContext.Provider>
	)
}
