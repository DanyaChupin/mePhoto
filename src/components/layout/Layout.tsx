import { FC, ReactNode } from 'react'
import Header from './header/Header'
import styles from './Layout.module.scss'

interface Props {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.main}>{children}</div>
		</div>
	)
}

export default Layout
