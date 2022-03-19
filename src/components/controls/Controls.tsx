import { FaArrowRight, FaArrowLeft, FaHeart, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Button } from '../button/Button'
import { useState } from 'react'
import classes from './Controls.module.scss'

interface ControlsProps {
	link: string
}

export const Controls = ({ link }: ControlsProps) => {
	const [active, setActive] = useState(false)

	const handleActive = () => {
		setActive(prevState => !prevState)
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
				<Button className={classes.btn} onClick={() => {}} icon={<FaArrowLeft />} />
				<Button className={classes.btn} onClick={() => {}} icon={<FaArrowRight />} />
				<Button className={classes.btn} onClick={() => {}} icon={<FaPlay />} />
			</div>
		</IconContext.Provider>
	)
}
