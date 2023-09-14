import { FC, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Pogination.module.scss'

const Pogination: FC = () => {
	const { searchTerm, page } = useParams()
	const navigate = useNavigate()

	const nextPage = useCallback(() => {
		navigate(`/search/${searchTerm}/${Number(page) + 1}`)
	}, [navigate, page, searchTerm])

	const prevPage = useCallback(() => {
		if (Number(page) === 1) return
		navigate(`/search/${searchTerm}/${Number(page) - 1}`)
	}, [page, navigate, searchTerm])

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
