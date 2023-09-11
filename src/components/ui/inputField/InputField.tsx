import { ChangeEvent, FC, useRef } from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './InputField.module.scss'

interface IInputField {
	searchTerm: string
	handleSearch: (even: ChangeEvent<HTMLInputElement>) => void
}

const InputField: FC<IInputField> = ({ searchTerm, handleSearch }) => {
	const ref = useRef<HTMLInputElement>(null)
	const handleClick = () => {
		if (ref.current) ref.current.focus()
	}
	return (
		<div className={styles.wrapper}>
			<MaterialIcon name="MdSearch" onClick={handleClick} />
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
