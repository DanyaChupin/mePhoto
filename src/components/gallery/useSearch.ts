import { useMemo } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { PhotoService } from '../../services/photo.services'
import { useNavigate } from 'react-router-dom'

export const useSearch = () => {
	const { debouncePage, debouncedTerm } = useDebounce(1500)
	const navigate = useNavigate()
	console.log('render')
	const queryData = useQuery(
		['search photo list', debouncedTerm, debouncePage],
		() => PhotoService.getBySlug(debouncedTerm, 12, debouncePage),
		{
			select: ({ data }) => data,
			enabled: !!debouncedTerm && !!debouncePage,
			onSuccess: () => {
				if (debouncedTerm) navigate(`/search/${debouncedTerm}/${debouncePage}`)
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
