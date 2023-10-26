import { FC } from 'react'
import { IPhoto } from '../../../types/images.interface'
import GenresSlider from '../../ui/genresSlider/GenresSlider'
import { useNavigate } from 'react-router-dom'
import styles from './Photo.module.scss'

const PhotoInfo: FC<{ data: IPhoto }> = ({ data }) => {
	const navigate = useNavigate()

	//COMPONENT
	const time = new Date(data?.created_at)
	const date = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		day: 'numeric',
		month: 'long',
		year: '2-digit',
	}).format(time)
	//COMPONENT

	const goToProfile = () => {
		navigate(`/users/${data?.user.username}`)
	}

	return (
		<div className={styles.info}>
			<div onClick={goToProfile} className={styles.userInfo}>
				<img src={data?.user.profile_image.medium} alt="avatar" />
				<div>
					<p className={styles.userName}>{data?.user.username}</p>
				</div>
			</div>
			<div>
				<p>Location</p>
				<p className={styles.location}>{data?.user.location || 'Unknown'}</p>
				<p>Date</p>
				<p className={styles.date}>{date || 'Unknown'}</p>
				<p>Description</p>
				<p className={styles.location}>{data?.alt_description}</p>
				<p>Tags</p>
				<GenresSlider tags={data?.tags || []} />
			</div>
		</div>
	)
}

export default PhotoInfo
