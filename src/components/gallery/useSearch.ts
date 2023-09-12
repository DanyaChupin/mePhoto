import { useMemo } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { PhotoService } from '../../services/photo.services'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const useSearch = () => {
	const { page } = useTypedSelector((state) => state.page)
	const { searchTerm } = useTypedSelector((state) => state.search)

	const debaunceSearch = useDebounce(searchTerm, 500)
	const navigate = useNavigate()
	const queryData = useQuery(
		['search photo list', debaunceSearch, page],
		() => PhotoService.getBySlug(debaunceSearch, 12, page),
		{
			select: ({ data }) => data,
			enabled: !!debaunceSearch && !!page,
			onSuccess: () => {
				navigate(`/search/${debaunceSearch}/${page}`)
			},
		}
	)
	return useMemo(
		() => ({
			...queryData,
		}),
		[queryData]
	)
}
