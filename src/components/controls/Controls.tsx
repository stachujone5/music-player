import { FaArrowRight, FaArrowLeft, FaHeart, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Button } from '../button/Button'
import { useState } from 'react'
import classes from './Controls.module.scss'

export const Controls = () => {
	const [active, setActive] = useState(false)

	return (
		<IconContext.Provider value={{ className: classes.icon }}>
			<div className={classes.controls}>
				<Button
					className={`${classes.btn} ${active ? classes.active : ''}`}
					onClick={() => {
						setActive(prevState => !prevState)
					}}
					icon={<FaHeart />}
				/>
				<Button className={classes.btn} onClick={() => {}} icon={<FaExternalLinkAlt />} />
				<Button className={classes.btn} onClick={() => {}} icon={<FaArrowLeft />} />
				<Button className={classes.btn} onClick={() => {}} icon={<FaArrowRight />} />
				<Button className={classes.play} onClick={() => {}} icon={<FaPlay />} />
			</div>
		</IconContext.Provider>
	)
}
