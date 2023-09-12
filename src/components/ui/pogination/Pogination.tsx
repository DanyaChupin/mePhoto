import { FC, useCallback } from 'react'
import styles from './Pogination.module.scss'

interface IPogination {
	setPage: React.Dispatch<React.SetStateAction<number>>
	page: number
	refetch: () => void
}

const Pogination: FC<IPogination> = ({ setPage, page, refetch }) => {
	const nextPage = useCallback(() => {
		setPage(page + 1)
		refetch()
	}, [page, refetch, setPage])
	const prevPage = useCallback(() => {
		if (page == 1) return
		setPage(page - 1)
		refetch()
	}, [page, refetch, setPage])
	return (
		<div className={styles.wrapper}>
			<div className={styles.prev} onClick={prevPage}>
				Prev
			</div>
			{<div className={styles.page}>{page}</div>}
			<div className={styles.next} onClick={nextPage}>
				Next
			</div>
		</div>
	)
}

export default Pogination
