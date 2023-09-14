import { reducer as toastrReducer } from 'react-redux-toastr'
import searchReducer from './search/search.slice'
export const reducers = {
	search: searchReducer,
	toastr: toastrReducer,
}
