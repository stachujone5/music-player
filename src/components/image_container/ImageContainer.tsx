import classes from './ImageContainer.module.scss'

interface ImageContainerProps {
	img: string
}

export const ImageContainer = ({ img }: ImageContainerProps) => {
	return (
		<div className={classes['img-container']}>
			<img src={img} alt='' />
		</div>
	)
}
