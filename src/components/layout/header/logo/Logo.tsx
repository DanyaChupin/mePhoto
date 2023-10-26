import { FC } from 'react'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<div className="flex">
			<a href="/1" className={styles.logo}>
				<div className={styles.m}>m</div> <div className={styles.e}>e</div>
				<div>Photo</div>
			</a>
		</div>
	)
}

export default Logo
