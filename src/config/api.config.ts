export const API_URL = 'https://api.unsplash.com'
export const API_KEY = 'knI9T1lFvTq_AmiaY6CcOsG40TMnxJfUP7L1dohIQX8'

export const getSearchUrl = (
	searchTerm: string,
	perPage: number,
	page: number
) =>
	`${API_URL}/search/photos?query=${searchTerm}&page=${page}&per_page=${perPage}&client_id=${API_KEY}`
export const getById = (id: string) =>
	`${API_URL}/photos/${id}?client_id=${API_KEY}`
