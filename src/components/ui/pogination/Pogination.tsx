import { FC, useCallback } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { decrementPage, incremetPage } from '../../../store/page/page.slice'
import styles from './Pogination.module.scss'
import { useSearch } from '../../gallery/useSearch'

const Pogination: FC = () => {
	const { refetch } = useSearch()
	const { page } = useTypedSelector((state) => state.page)
	const dispatch = useDispatch()
	const nextPage = useCallback(() => {
		dispatch(incremetPage())
		refetch()
	}, [dispatch, refetch])
	const prevPage = useCallback(() => {
		if (page == 1) return
		dispatch(decrementPage())
		refetch()
	}, [page, refetch, dispatch])
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
