import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { PhotoService } from '../../services/photo.services'
import { useNavigate } from 'react-router-dom'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [page, setPage] = useState(9)
	const debaunceSearch = useDebounce(searchTerm, 500)
	const navigate = useNavigate()
	const queryData = useQuery(
		['search photo list', debaunceSearch],
		() => PhotoService.getBySlug(debaunceSearch, 10, page),
		{
			select: ({ data }) => data,
			enabled: !!debaunceSearch && !!page,
			onSuccess: () => {
				navigate(`/search/${searchTerm}/${page}`)
			},
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			setPage,
			page,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[queryData, searchTerm]
	)
}
