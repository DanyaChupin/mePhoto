import HomePage from '../pages/home'
import PhotoPage from '../pages/photo'
import SearchPage from '../pages/search'

export const routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/search/:searchTerm/:page',
		component: SearchPage,
	},
	{
		path: '/photo/:id',
		component: PhotoPage,
	},
	{
		path: '/search',
		component: SearchPage,
	},
]
