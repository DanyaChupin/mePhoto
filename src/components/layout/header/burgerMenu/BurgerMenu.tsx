import { FC, useState } from 'react'
import MaterialIcon from '../../../ui/MaterialIcon'
import Menu from './Menu'
import styles from './BurgerMenu.module.scss'

const BurgerMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.burger}>
			<button onClick={() => setIsOpen(!isOpen)}>
				<MaterialIcon
					name={isOpen ? 'MdMenuOpen' : 'MdMenu'}
					style="text-[25px]"
				/>
			</button>
			{isOpen && <Menu />}
		</div>
	)
}

export default BurgerMenu
