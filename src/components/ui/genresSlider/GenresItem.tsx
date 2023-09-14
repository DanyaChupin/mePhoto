import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearch } from '../../../store/search/search.slice'

const GenresItem: FC<{ title: string }> = ({ title }) => {
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(setSearch(title))
	}
	return (
		<Link
			onClick={handleClick}
			className="mx-3 underline whitespace-nowrap"
			to={`/search/${title}/1`}
		>
			#{title}
		</Link>
	)
}

export default GenresItem
