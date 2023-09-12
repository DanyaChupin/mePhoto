import { FC } from 'react'
import { IResult } from '../../types/images.interface'
import styles from './Gallery.module.scss'
import GalleryItem from '../galleryItem/GalleryItem'
import SkeletonLoader from '../ui/SkeletonLoader'

interface IGallery {
	images: IResult
	isLoading: boolean
}

const Gallery: FC<IGallery> = ({ images, isLoading }) => {
	return (
		<div className={styles.gallery}>
			{isLoading ? (
				<>
					<SkeletonLoader count={3} className="m-5" />
					<SkeletonLoader count={3} className="m-5" />
					<SkeletonLoader count={3} className="m-5" />
				</>
			) : (
				images.results.map((image) => (
					<GalleryItem image={image} key={image.id} />
				))
			)}
		</div>
	)
}

export default Gallery
