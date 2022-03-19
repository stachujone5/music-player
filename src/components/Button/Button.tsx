interface ButtonProps {
	onClick: () => void
	icon: JSX.Element
	className?: string
}

export const Button: React.VFC<ButtonProps> = ({ onClick, icon, className }) => {
	return (
		<button className={`${className ? className : ''}`} onClick={onClick}>
			{icon}
		</button>
	)
}
