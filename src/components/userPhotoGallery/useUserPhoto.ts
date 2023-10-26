import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PhotoService } from '../../services/photo.services'
import { useParams } from 'react-router-dom'

export const useUserPhoto = (username: string, quantityImg: string) => {
	const { page } = useParams()
	const pageNumber = page ? String(page) : '1'

	const queryData = useQuery(
		['get All photo list', pageNumber, username],
		() => PhotoService.getPhotoUser(pageNumber, username, quantityImg),
		{
			select: ({ data }) => data,
			enabled: !!username,
		}
	)
	return useMemo(
		() => ({
			...queryData,
		}),
		[queryData]
	)
}
