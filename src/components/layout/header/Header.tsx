import { ChangeEvent, FC } from 'react'
import BurgerMenu from './burgerMenu/BurgerMenu'
import Logo from './logo/Logo'
import InputField from '../../ui/inputField/InputField'
import styles from './Header.module.scss'
interface IHeader {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
const Header: FC<IHeader> = ({ handleSearch, searchTerm }) => {
	return (
		<>
			<header className={styles.header}>
				<div>
					<Logo />
					<InputField handleSearch={handleSearch} searchTerm={searchTerm} />
					<BurgerMenu />
				</div>
			</header>
		</>
	)
}

export default Header
