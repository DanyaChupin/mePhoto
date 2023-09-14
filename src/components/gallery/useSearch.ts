import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PhotoService } from '../../services/photo.services'
import { useNavigate, useParams } from 'react-router-dom'

export const useSearch = () => {
	const { searchTerm, page } = useParams()

	const slug = String(searchTerm)

	const pageNumber = String(page)

	const navigate = useNavigate()

	const queryData = useQuery(
		['search photo list', slug, pageNumber],
		() => PhotoService.getBySlug(slug, 12, pageNumber),
		{
			select: ({ data }) => data,
			enabled: !!slug && !!pageNumber,
			onSuccess: () => {
				navigate(`/search/${slug}/${pageNumber}`)
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
