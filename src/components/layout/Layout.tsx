import { FC, ReactNode } from 'react'
import Header from './header/Header'

interface Props {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default Layout
