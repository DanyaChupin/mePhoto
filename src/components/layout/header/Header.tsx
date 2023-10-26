import { FC } from 'react'
import Logo from './logo/Logo'
import InputField from '../../ui/inputField/InputField'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<>
			<header className={styles.header}>
				<div>
					<Logo />
					<InputField />
				</div>
			</header>
		</>
	)
}

export default Header
