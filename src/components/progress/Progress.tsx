import classes from './Progress.module.scss'

interface ProgressProps {
	length?: string
}

export const Progress = ({ length }: ProgressProps) => {
	return (
		<div className={classes.progress}>
			<div className={classes.inside}></div>
		</div>
	)
}
