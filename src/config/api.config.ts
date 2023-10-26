export const API_URL = 'https://api.unsplash.com'
export const API_KEY = 'knI9T1lFvTq_AmiaY6CcOsG40TMnxJfUP7L1dohIQX8'

export const getSearchUrl = (slug: string, perPage: number, page: string) =>
	`${API_URL}/search/photos?query=${slug}&page=${page}&per_page=${perPage}&client_id=${API_KEY}`

export const getById = (id: string) =>
	`${API_URL}/photos/${id}?client_id=${API_KEY}`

export const getUserProfile = (userName: string) =>
	`${API_URL}/users/${userName}?client_id=${API_KEY}`

export const getAllPhoto = (perPage: number, page: string) =>
	`${API_URL}/photos?page=${page}&per_page=${perPage}&client_id=${API_KEY}`
export const getPhotoUser = (
	username: string,
	page: string,
	quantityImg: string
) =>
	`${API_URL}/users/${username}/photos?page=${page}&per_page=${quantityImg}&client_id=${API_KEY}`
