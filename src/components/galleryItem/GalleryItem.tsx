import { FC } from 'react'
import { IPhoto } from '../../types/images.interface'
import cn from 'classnames'
import styles from './GalleryItem.module.scss'
import { useNavigate } from 'react-router-dom'

const GalleryItem: FC<{ image: IPhoto; id: string }> = ({ image, id }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/photo/${id}`)
	}
	return (
		<div
			onClick={handleClick}
			className={styles.image}
			style={{
				backgroundImage: `url(${image.urls.regular})`,
			}}
		>
			<div className={cn(styles.wrapper, 'backdrop-blur-sm')}>
				<div className="flex items-center mb-3">
					<img
						className={styles.avatar}
						src={image.user.profile_image.medium}
						alt={image.user.name}
					/>

					<h1>{image.user.name}</h1>
				</div>
				<p>{image.alt_description}</p>
			</div>
		</div>
	)
}

export default GalleryItem
