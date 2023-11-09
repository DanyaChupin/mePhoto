import { FC } from 'react'
import styles from './Photo.module.scss'

interface IImage {
	image: {
		full: string
		regular: string
		small: string
	}
}
const Image: FC<IImage> = ({ image }) => {
	return (
		<img
			className={styles.photo}
			src={image.small}
			srcSet={`${image.regular} 640w, ${image.full} 1366w`}
			alt="photo"
		/>
	)
}

export default Image
