import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './routers/Router'
import { Provider } from 'react-redux'
import { store } from './store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
)
