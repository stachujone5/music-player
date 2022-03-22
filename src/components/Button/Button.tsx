interface ButtonProps {
	onClick: () => void
	icon: JSX.Element
	className: string
	ariaLabel: string
}

export const Button = ({ onClick, icon, className, ariaLabel }: ButtonProps) => {
	return (
		<button className={className} onClick={onClick} aria-label={ariaLabel}>
			{icon}
		</button>
	)
}
