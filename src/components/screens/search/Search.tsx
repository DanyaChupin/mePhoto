import { FC } from 'react'
import Gallery from '../../gallery/Gallery.js'
import { useSearch } from '../../gallery/useSearch.js'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector.js'

const Search: FC = () => {
	const { searchTerm } = useTypedSelector((state) => state.search)
	const { data, isLoading } = useSearch()

	const navigate = useNavigate()
	if (!searchTerm) navigate('/')
	return (
		<>
			{isLoading ? (
				<div className="flex justify-center">Loading</div>
			) : (
				<Gallery images={data?.results || []} />
			)}
		</>
	)
}

export default Search
