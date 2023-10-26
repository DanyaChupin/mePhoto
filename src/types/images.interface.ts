import { IUser } from './user.interface'

export interface ITag {
	type: string
	title: string
}
export interface IPhoto {
	alt_description: string
	blur_hash: string
	breadcrumbs: [null]
	color: string
	created_at: Date
	current_user_collections: [null]
	description: string | null
	height: number
	id: string
	liked_by_user: boolean
	likes: number
	links: {
		self: string
		html: string
		download: string
		download_location: string
	}
	promoted_at: null | string
	slug: string
	sponsorship: null | string
	tags: ITag[]
	topic_submissions: { film: { status: string } }
	updated_at: string
	urls: {
		full: string
		raw: string
		regular: string
		small: string
		small_s3: string
		thumb: string
	}
	user: IUser
	width: number
}

export interface IResult {
	total: number
	total_pages: number
	results: IPhoto[]
}
