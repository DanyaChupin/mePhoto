import axios from 'axios'
import { getSearchUrl } from '../config/api.config.ts'
import { IResult } from '../types/images.interface.ts'
export const PhotoService = {
	async getBySlug(searchTerm: string, perPage: number, page: number) {
		return await axios.get<IResult>(getSearchUrl(searchTerm, perPage, page))
	},
}
