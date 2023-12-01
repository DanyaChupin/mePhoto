import HomePage from '../pages/home'
import PhotoPage from '../pages/photo'
import SearchPage from '../pages/search'
import UserPage from '../pages/user'
import Redirect from '../pages/redirect'
import UserGallery from '../pages/userGallery'

export const routes = [
	{
		path: '/',
		component: Redirect,
	},
	{
		path: '/:page',
		component: HomePage,
	},
	{
		path: '/users/:userName',
		component: UserPage,
	},
	{
		path: '/users/:userName/photos/:page',
		component: UserGallery,
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
