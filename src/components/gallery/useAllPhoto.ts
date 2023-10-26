import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PhotoService } from '../../services/photo.services'
import { useParams } from 'react-router-dom'

export const useAllPhoto = () => {
	const { page } = useParams()

	const pageNumber = String(page)

	const queryData = useQuery(
		['get All photo list', pageNumber],
		() => PhotoService.getAllPhoto(12, pageNumber),
		{
			select: ({ data }) => data,
			enabled: !!pageNumber,
		}
	)
	return useMemo(
		() => ({
			...queryData,
		}),
		[queryData]
	)
}
