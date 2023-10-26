import { FC } from 'react'
import styles from './statictics.module.scss'
import StatisticsItem from './StatisticsItem'

interface IUserStatistics {
	totalLike: number
	totalPhotos: number
	following: number
	followers: number
}
const Statistics: FC<IUserStatistics> = ({
	totalLike,
	totalPhotos,
	following,
	followers,
}) => {
	const allStats = []
	allStats.push(
		{ name: 'Like', count: totalLike },
		{ name: 'Photos', count: totalPhotos },
		{ name: 'following', count: following },
		{ name: 'followers', count: followers }
	)
	return (
		<div className={styles.statistic__wrapper}>
			{allStats.map((stats) => (
				<StatisticsItem stats={stats} key={stats.name} />
			))}
		</div>
	)
}

export default Statistics
