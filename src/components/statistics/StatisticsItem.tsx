import { FC } from 'react'
import styles from './statictics.module.scss'

const StatisticsItem: FC<{ stats: { name: string; count: number } }> = ({
	stats,
}) => {
	return (
		<div className={styles.statistics__item}>
			<p className={styles.item__count}>{stats.count}</p>
			<h1 className={styles.item__title}>{stats.name}</h1>
		</div>
	)
}

export default StatisticsItem
