export interface IPhoto {
	alt_description: string
	blur_hash: string
	breadcrumbs: [unknown]
	color: string
	created_at: string
	current_user_collections: [unknown]
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
	tags: [unknown]
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
	user: {
		accepted_tos: boolean
		bio: string
		first_name: string
		for_hire: boolean
		id: string
		instagram_username: null | string
		last_name: string
		links: {
			followers: string
			following: string
			html: string
			likes: string
			photos: string
			portfolio: string
			self: string
		}
		location: string
		name: string
		portfolio_url: null | string
		profile_image: { large: string; medium: string; small: string }
		social: {
			instagram_username: null | string
			paypal_email: null | string
			portfolio_url: null | string
			twitter_username: null | string
		}
		total_collections: number
		total_likes: number
		total_photos: number
		twitter_username: null | string
		updated_at: string
		username: string
	}
	width: number
}

export interface IResult {
	total: number
	total_pages: number
	results: IPhoto[]
}
