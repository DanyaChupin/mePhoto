import SearchPage from '../pages/search'

export const routes = [
	{
		path: '/search/:name/:page',
		component: SearchPage,
	},
	{
		path: '/search',
		component: SearchPage,
	},
]
