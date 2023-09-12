import { ChangeEvent, FC, useRef } from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './InputField.module.scss'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../../store/search/search.slice'
import { defaultPage } from '../../../store/page/page.slice'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const InputField: FC = () => {
	const { searchTerm } = useTypedSelector((state) => state.search)
	const ref = useRef<HTMLInputElement>(null)
	const dispatch = useDispatch()
	const changeFocus = () => {
		if (ref.current) ref.current.focus()
	}
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearch(e.target.value))
		dispatch(defaultPage())
	}
	return (
		<div className={styles.wrapper}>
			<MaterialIcon name="MdSearch" onClick={changeFocus} />
			<input
				ref={ref}
				value={searchTerm}
				onChange={handleSearch}
				className={styles.input}
				placeholder="Search image..."
			/>
		</div>
	)
}

export default InputField
