import { FC } from 'react'
import styles from './userGallery.module.scss'
import { useUserPhoto } from './useUserPhoto'
import Gallery from '../gallery/Gallery'

const UserGalleryProfile: FC<{ username: string }> = ({ username }) => {
	const { data, isLoading } = useUserPhoto(username, '6')

	return (
		<div className={styles.userGallery__wrapper}>
			<h1 className={styles.userGallery__title}>Photo</h1>
			<span></span>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<Gallery images={data || []} togglePogination={false} />
				</>
			)}
		</div>
	)
}
export default UserGalleryProfile
