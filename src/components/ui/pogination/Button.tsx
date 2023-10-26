import { FC } from 'react'
import styles from './Pogination.module.scss'

const Button: FC<{ onClick: () => void; title: string }> = ({
	onClick,
	title,
}) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{title}
		</button>
	)
}

export default Button
