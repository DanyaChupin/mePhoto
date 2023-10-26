import { FC } from 'react'
import { useAllPhoto } from '../../gallery/useAllPhoto'
import Gallery from '../../gallery/Gallery'

const Home: FC = () => {
	const { data, isLoading } = useAllPhoto()
	return (
		<>
			{isLoading ? (
				<div className="flex justify-center">Loading</div>
			) : (
				<Gallery images={data || []} togglePogination={true} />
			)}
		</>
	)
}

export default Home
