import axios from 'axios'
import { getUserProfile } from '../config/api.config.ts'
import { IUser } from '../types/user.interface.ts'

export const UserService = {
	async getByName(userName: string) {
		return await axios.get<IUser>(getUserProfile(userName))
	},
}
