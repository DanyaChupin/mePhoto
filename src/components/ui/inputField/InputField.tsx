import { ChangeEvent, FC } from 'react'
import MaterialIcon from '../MaterialIcon'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../../store/search/search.slice'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import styles from './InputField.module.scss'
import { useNavigate } from 'react-router-dom'

const InputField: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { searchTerm } = useTypedSelector((state) => state.search)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearch(e.target.value))
	}
	const handleClick = () => {
		navigate(`/search/${searchTerm}/1`)
	}
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.input}
				onChange={handleSearch}
				value={searchTerm}
				placeholder="Search image..."
			/>

			<MaterialIcon
				name="MdSearch"
				style="text-xl cursor-pointer"
				onClick={handleClick}
			/>
		</div>
	)
}

export default InputField
