import axios from 'axios'
import { getById, getSearchUrl } from '../config/api.config.ts'
import { IPhoto, IResult } from '../types/images.interface.ts'

export const PhotoService = {
	async getBySlug(slug: string, perPage: number, numberPage: string) {
		return await axios.get<IResult>(getSearchUrl(slug, perPage, numberPage))
	},
	async getById(id: string) {
		return await axios.get<IPhoto>(getById(id))
	},
}
