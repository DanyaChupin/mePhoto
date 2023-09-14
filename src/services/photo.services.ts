import axios from 'axios'
import { getById, getSearchUrl } from '../config/api.config.ts'
import { IPhoto, IResult } from '../types/images.interface.ts'

export const PhotoService = {
	async getBySlug(searchTerm: string, perPage: number, page: number) {
		return await axios.get<IResult>(getSearchUrl(searchTerm, perPage, page))
	},
	async getById(id: string) {
		return await axios.get<IPhoto>(getById(id))
	},
}
