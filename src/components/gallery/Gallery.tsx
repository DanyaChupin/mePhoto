import { FC, useEffect } from 'react'
import { IResult } from '../../types/images.interface'
import styles from './Gallery.module.scss'
import { useLocation } from 'react-router-dom'

interface IGallery {
	images: IResult
	isLoading: boolean
	setPage: React.Dispatch<React.SetStateAction<number>>
	page: number
	refetch: () => void
}

const Gallery: FC<IGallery> = ({
	refetch,
	images,
	isLoading,
	setPage,
	page,
}) => {
	if (!isLoading) console.log(images)
	const location = useLocation()
	const handleClick = () => {
		setPage(page - 1)
	}
	useEffect(() => {
		refetch()
	}, [page, refetch, location])
	return (
		<div className={styles.gallery}>
			{images.results.map((image) => (
				<img
					src={image.urls.small}
					alt={image.alt_description}
					key={image.id}
				/>
			))}
			<div>
				<div>{page}</div>
				<button onClick={handleClick}>next</button>
			</div>
		</div>
	)
}

export default Gallery
