import { reducer as toastrReducer } from 'react-redux-toastr'
import searchReducer from './search/search.slice'
import pageReducer from './page/page.slice'
export const reducers = {
	search: searchReducer,
	page: pageReducer,
	toastr: toastrReducer,
}
