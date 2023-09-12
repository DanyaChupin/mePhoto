import { FC } from 'react'
import { menu } from './menu.data'
import { Link } from 'react-router-dom'
import styles from './BurgerMenu.module.scss'
import { useDispatch } from 'react-redux'
import { clearSearch } from '../../../../store/search/search.slice'

const Menu: FC = () => {
	const dispatch = useDispatch()
	const clearValues = () => {
		dispatch(clearSearch())
	}
	return (
		<div className={styles.menu}>
			<ul>
				{menu.map((item) => (
					<li key={item.title}>
						<Link onClick={clearValues} to={item.link}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Menu
