import { ChangeEvent, FC, ReactNode } from 'react'
import Header from './header/Header'

interface Props {
	children: ReactNode
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const Layout: FC<Props> = ({ children, searchTerm, handleSearch }) => {
	return (
		<>
			<Header searchTerm={searchTerm} handleSearch={handleSearch} />
			{children}
		</>
	)
}

export default Layout
