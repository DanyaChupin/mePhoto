import { FC } from 'react'
import styles from './Photo.module.scss'
const Image: FC<{ image: string }> = ({ image }) => {
	return (
		<div
			className={styles.photo}
			style={{
				backgroundImage: `url(${image})`,
			}}
		></div>
	)
}

export default Image
