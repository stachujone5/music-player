import classes from './Info.module.scss'

interface InfoProps {
	author: string
	title: string
}

export const Info = ({ author, title }: InfoProps) => {
	return (
		<>
			<h2 className={classes.author}>{author}</h2>
			<h3 className={classes.title}>{title}</h3>
		</>
	)
}
