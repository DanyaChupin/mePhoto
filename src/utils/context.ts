import { createContext } from 'react'

type SearchContextType = {
	searchTerm: string
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iSearchContextState = {
	searchTerm: '',
	setSearchTerm: () => {},
}

const SearchContext = createContext<SearchContextType>(iSearchContextState)

export default SearchContext
