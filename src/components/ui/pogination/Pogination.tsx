import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Pogination.module.scss'
import Button from './Button'

const Pogination: FC = () => {
	const { searchTerm, page, userName } = useParams()
	const navigate = useNavigate()
	const pageNum = Number(page)
	const setNextPage = (reduceOrAdd: 'increase' | 'decrease') => {
		const nextPage = reduceOrAdd === 'increase' ? pageNum + 1 : pageNum - 1
		if (searchTerm) {
			return `/search/${searchTerm}/${nextPage}`
		} else if (userName) {
			return `/users/${userName}/photos/${nextPage}`
		} else {
			return `/${nextPage}`
		}
	}
	const nextPage = () => {
		navigate(setNextPage('increase'))
	}

	const prevPage = () => {
		if (pageNum === 1) return
		navigate(setNextPage('decrease'))
	}

	return (
		<div className={styles.wrapper}>
			<Button title="Prev" onClick={prevPage} />
			<div className={styles.page}>{page}</div>
			<Button title="Next" onClick={nextPage} />
		</div>
	)
}

export default Pogination
