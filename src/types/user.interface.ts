export interface IUser {
	accepted_tos: boolean
	bio: string
	first_name: string
	for_hire: boolean
	id: string

	followers_count: number
	following_count: number
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
	updated_at: Date
	username: string
}
