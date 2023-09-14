import { FC } from 'react'
import { ITag } from '../../../types/images.interface'
import GenresItem from './GenresItem'
import styles from './GenresSlider.module.scss'

const GenresSlider: FC<{ tags: ITag[]; title?: string }> = ({
	tags,
	title,
}) => {
	return (
		<>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.slider}>
				{tags.map((tag) => (
					<GenresItem title={tag.title} key={tag.title} />
				))}
			</div>
		</>
	)
}

export default GenresSlider
