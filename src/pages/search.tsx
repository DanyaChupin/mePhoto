import Search from '../components/screens/home/Search'
import { FC } from 'react'
import { useSearch } from '../components/gallery/useSearch'
import Header from '../components/layout/header/Header'

const SearchPage: FC = () => {
	const { data, isLoading, searchTerm, handleSearch, setPage, page, refetch } =
		useSearch()

	return (
		<>
			<Header handleSearch={handleSearch} searchTerm={searchTerm} />
			{data ? (
				<Search
					refetch={refetch}
					images={data}
					isLoading={isLoading}
					setPage={setPage}
					page={page}
				/>
			) : (
				<div>What do you want to find?</div>
			)}
		</>
	)
}

export default SearchPage
