import axios from 'axios'
import {
	getAllPhoto,
	getById,
	getPhotoUser,
	getSearchUrl,
} from '../config/api.config.ts'
import { IPhoto, IResult } from '../types/images.interface.ts'

export const PhotoService = {
	async getBySlug(slug: string, perPage: number, page: string) {
		return await axios.get<IResult>(getSearchUrl(slug, perPage, page))
	},
	async getById(id: string) {
		return await axios.get<IPhoto>(getById(id))
	},
	async getAllPhoto(perPage: number, page: string) {
		return await axios.get<IPhoto[]>(getAllPhoto(perPage, page))
	},
	async getPhotoUser(page: string, username: string, quantityImg: string) {
		return await axios.get<IPhoto[]>(getPhotoUser(username, page, quantityImg))
	},
}
