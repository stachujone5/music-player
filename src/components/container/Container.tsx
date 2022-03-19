import classes from './Container.module.scss'


export const Container: React.FC = ({ children }) => {
	return <div className={classes.container}>{children}</div>
}
