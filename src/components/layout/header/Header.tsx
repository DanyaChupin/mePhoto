import { FC } from 'react'
import BurgerMenu from './burgerMenu/BurgerMenu'
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
					<BurgerMenu />
				</div>
			</header>
		</>
	)
}

export default Header
