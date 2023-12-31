import { createSlice } from '@reduxjs/toolkit'
import { ISearch } from './search.interface'

const initialState: ISearch = {
	searchTerm: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.searchTerm = action.payload
		},
		clearSearch: (state) => {
			state.searchTerm = ''
		},
	},
})
export const { setSearch, clearSearch } = searchSlice.actions
export default searchSlice.reducer
