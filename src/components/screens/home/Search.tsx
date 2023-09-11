import { FC } from 'react'
import Gallery from '../../gallery/Gallery.js'
import { IResult } from '../../../types/images.interface.js'
import styles from './Search.module.scss'

interface ISearch {
	images: IResult
	isLoading: boolean
	setPage: React.Dispatch<React.SetStateAction<number>>
	page: number
	refetch: () => void
}

const Search: FC<ISearch> = ({ refetch, images, isLoading, setPage, page }) => {
	return (
		<section className={styles.search}>
			<Gallery
				refetch={refetch}
				images={images}
				isLoading={isLoading}
				setPage={setPage}
				page={page}
			/>
		</section>
	)
}

export default Search
