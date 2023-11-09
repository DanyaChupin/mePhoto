import { ChangeEvent, FC, useCallback } from 'react'
import MaterialIcon from '../MaterialIcon'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../../store/search/search.slice'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'
import styles from './InputField.module.scss'

const InputField: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { searchTerm } = useTypedSelector((state) => state.search)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearch(e.target.value))
	}

	const handleClickSearch = useCallback(
		(e: ChangeEvent<HTMLFormElement>) => {
			e.preventDefault()
			if (searchTerm === '') return
			navigate(`/search/${searchTerm}/1`)
		},
		[navigate, searchTerm]
	)

	return (
		<form onSubmit={handleClickSearch} className={styles.wrapper}>
			<label form="search">
				<input
					className={styles.input}
					onChange={handleSearch}
					value={searchTerm}
					placeholder="Search image..."
					name="search"
				/>
			</label>
			<MaterialIcon
				name="MdSearch"
				style="text-2xl cursor-pointer "
				onClick={handleClickSearch}
			/>
		</form>
	)
}

export default InputField
