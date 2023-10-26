import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PhotoService } from '../../../services/photo.services'
import { useNavigate } from 'react-router-dom'

export const useGetById = (id: string) => {
	const navigate = useNavigate()
	const queryData = useQuery(
		['getById photo'],
		() => PhotoService.getById(id),
		{
			select: ({ data }) => data,
			enabled: !!id,
			onSuccess: (data) => {
				navigate(`/photo/${data.id}`)
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
