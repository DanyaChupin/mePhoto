import HomePage from '../pages/home'
import SearchPage from '../pages/search'

export const routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/search/:name/:page',
		component: SearchPage,
	},
	{
		path: '/search',
		component: SearchPage,
	},
]
