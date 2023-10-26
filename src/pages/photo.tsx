import { FC } from 'react'
import Photo from '../components/screens/photo/Photo'
import Layout from '../components/layout/Layout'
import { useParams } from 'react-router-dom'
import { useGetById } from '../components/screens/photo/useGetById'
import Error404 from './404'

const PhotoPage: FC = () => {
	const { id } = useParams()
	const photoId = String(id)
	const { isLoading, data } = useGetById(photoId)
	return (
		<Layout>
			{isLoading ? (
				<div className="flex justify-center">Loading...</div>
			) : data ? (
				<Photo data={data} key={data.id} />
			) : (
				<Error404 />
			)}
		</Layout>
	)
}

export default PhotoPage
