import { FC } from 'react'
import Gallery from '../../gallery/Gallery.js'
import { IResult } from '../../../types/images.interface.js'
import styles from './Search.module.scss'
import Pogination from '../../ui/pogination/Pogination.js'

interface ISearch {
	images: IResult
	isLoading: boolean
	setPage: React.Dispatch<React.SetStateAction<number>>
	page: number
	refetch: () => void
}

const Search: FC<ISearch> = ({ refetch, images, isLoading, setPage, page }) => {
	console.log('render')
	return (
		<section className={styles.search}>
			<Gallery images={images} isLoading={isLoading} />
			<Pogination page={page} refetch={refetch} setPage={setPage} />
		</section>
	)
}

export default Search
