import { FC } from 'react'
import Layout from '../components/layout/Layout'
import Gallery from '../components/gallery/Gallery'
import { useUserPhoto } from '../components/userPhotoGallery/useUserPhoto'
import { useParams } from 'react-router-dom'

const UserGallery: FC = () => {
	const { userName } = useParams()
	const { data, isLoading } = useUserPhoto(userName!, '12')
	return (
		<div>
			<Layout>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<Gallery images={data || []} togglePogination={true} />
				)}
			</Layout>
		</div>
	)
}

export default UserGallery
