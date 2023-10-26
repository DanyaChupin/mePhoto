import { FC } from 'react'
import Gallery from '../../gallery/Gallery.js'
import { useSearch } from '../../gallery/useSearch.js'

const Search: FC = () => {
	const { data, isLoading } = useSearch()

	return (
		<>
			{isLoading ? (
				<div className="flex justify-center">Loading...</div>
			) : (
				<Gallery images={data?.results || []} togglePogination={true} />
			)}
		</>
	)
}

export default Search
