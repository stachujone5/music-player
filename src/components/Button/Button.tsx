import classes from './Button.module.scss'

interface ButtonProps {
	onClick: () => void
	icon: JSX.Element
}

export const Button: React.FC<ButtonProps> = ({ onClick, icon }) => {
	return (
		<button className={classes.button} onClick={onClick}>
			{icon}
		</button>
	)
}
