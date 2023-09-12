import Search from '../components/screens/search/Search'
import { FC } from 'react'
import { useSearch } from '../components/gallery/useSearch'
import Layout from '../components/layout/Layout'

const SearchPage: FC = () => {
	const { data, isLoading, refetch } = useSearch()

	return (
		<Layout>
			{data ? (
				<Search refetch={refetch} images={data} isLoading={isLoading} />
			) : (
				<div>What do you want to find?</div>
			)}
		</Layout>
	)
}

export default SearchPage
