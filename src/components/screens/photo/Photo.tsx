import { FC } from 'react'
import Image from './Image'
import PhotoInfo from './PhotoInfo'
import { IPhoto } from '../../../types/images.interface'
import styles from './Photo.module.scss'

const Photo: FC<{ data: IPhoto }> = ({ data }) => {
	return (
		<div className={styles.wrapper}>
			{data && (
				<>
					<Image image={data.urls} />
					<PhotoInfo data={data} />
				</>
			)}
		</div>
	)
}
export default Photo
