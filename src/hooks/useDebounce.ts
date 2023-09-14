import { useEffect, useState } from 'react'
import { useTypedSelector } from './useTypedSelector'

export const useDebounce = (delay: number) => {
	const { page } = useTypedSelector((state) => state.page)
	const { searchTerm } = useTypedSelector((state) => state.search)
	console.log('render page search')
	const [debouncedTerm, setDebouncedTerm] = useState('')
	const [debouncePage, setDebouncedPage] = useState(1)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedPage(page)
			setDebouncedTerm(searchTerm)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [searchTerm, page, delay, debouncedTerm])

	return { debouncePage, debouncedTerm }
}
