import { FC } from 'react'
import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<div className="flex">
			<a href="/" className={styles.logo}>
				<div className={styles.m}>m</div> <div className={styles.e}>e</div>
				<div>Photo</div>
			</a>

			{/* <SwitchThemeButton /> */}
		</div>
	)
}

export default Logo
