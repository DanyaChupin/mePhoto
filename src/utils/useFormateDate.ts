export const useFormatedDate = (date: Date) => {
	const formatted3 = Intl.DateTimeFormat('en', {
		year: 'numeric',
		day: '2-digit',
		month: 'long',
	}).format(date)
	return { formatted3 }
}
