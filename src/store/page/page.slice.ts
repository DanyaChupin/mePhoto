import { createSlice } from '@reduxjs/toolkit'
import { IPage } from './page.interface'

const initialState: IPage = {
	page: 1,
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		incremetPage: (state) => {
			state.page = state.page + 1
		},
		decrementPage: (state) => {
			state.page = state.page - 1
		},
		defaultPage: (state) => {
			state.page = 1
		},
	},
})
export const { incremetPage, decrementPage, defaultPage } = searchSlice.actions
export default searchSlice.reducer
