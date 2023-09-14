import { FC } from 'react'
import GenresSlider from '../ui/genresSlider/GenresSlider'
import { useGetById } from '../galleryItem/useGetById'
import { useParams } from 'react-router-dom'
import styles from './Photo.module.scss'

const Photo: FC = () => {
	const { id } = useParams()
	const photoId = String(id)
	const { isLoading, data } = useGetById(photoId)
	return (
		<div className={styles.wrapper}>
			{isLoading && <div>Hello</div>}
			<div
				className={styles.photo}
				style={{
					backgroundImage: `url(${data?.urls.full})`,
				}}
			></div>
			<div className={styles.info}>
				<div className={styles.userInfo}>
					<img src={data?.user.profile_image.small} alt="avatar" />
					<div>
						<p className={styles.userName}>{data?.user.username}</p>
					</div>
				</div>
				<div>
					<p>Location</p>
					<p className={styles.location}>{data?.user.location}</p>
					<p>Description</p>
					<p className={styles.location}>{data?.alt_description}</p>
					<p>Tags</p>
					<GenresSlider tags={data?.tags || []} />
				</div>
			</div>
		</div>
	)
}
export default Photo
