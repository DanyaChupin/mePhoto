import { FC } from 'react'
import { IPhoto } from '../../types/images.interface'
import GalleryItem from '../galleryItem/GalleryItem'
import Pogination from '../ui/pogination/Pogination'
import styles from './Gallery.module.scss'

interface IGallery {
	images: IPhoto[]
	togglePogination: boolean
}

const Gallery: FC<IGallery> = ({ images, togglePogination }) => {
	return (
		<>
			<section className={styles.wrapper}>
				<div className={styles.gallery}>
					{images.map((image) => (
						<GalleryItem image={image} key={image.id} id={image.id} />
					))}
				</div>
				{togglePogination && <Pogination />}
			</section>
		</>
	)
}

export default Gallery
