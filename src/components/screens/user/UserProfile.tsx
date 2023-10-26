import { FC } from 'react'
import { useUser } from './useUser'
import { useNavigate, useParams } from 'react-router-dom'

import Statistics from '../../statistics/Statistics'
import styles from './User.module.scss'
import UserGalleryProfile from '../../userPhotoGallery/UserGalleryProfile'

const UserProfile: FC = () => {
	const { userName } = useParams()
	const username = String(userName)
	const navigate = useNavigate()
	const { data, isLoading } = useUser(username)

	return (
		<>
			{isLoading ? (
				<p>Loading</p>
			) : (
				<div className={styles.wrapper}>
					<div className={styles.userInfo}>
						<img
							className={styles.userAvatar}
							src={data?.profile_image.large}
							alt="avatar"
						/>
						<div>
							<p className={styles.userName}>{data?.username}</p>
							<p className={styles.userLocation}>Location: {data?.location}</p>
						</div>
					</div>
					<Statistics
						totalLike={data?.total_likes || 0}
						totalPhotos={data?.total_photos || 0}
						following={data?.following_count || 0}
						followers={data?.followers_count || 0}
					/>
					<UserGalleryProfile username={username} />
					{data && (
						<button
							onClick={() => navigate(`photos/1`)}
							className={styles.userMorePhoto__button}
						>
							More photo by {username}
						</button>
					)}
				</div>
			)}
		</>
	)
}

export default UserProfile
