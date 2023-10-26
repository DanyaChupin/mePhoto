import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { UserService } from '../../../services/user.service'

export const useUser = (userName: string) => {
	const queryData = useQuery(
		['getByName user'],
		() => UserService.getByName(userName),
		{
			select: ({ data }) => data,
			enabled: !!userName,
		}
	)
	return useMemo(
		() => ({
			...queryData,
		}),
		[queryData]
	)
}
