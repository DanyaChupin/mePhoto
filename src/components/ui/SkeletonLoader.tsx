import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#F4F6FB "
			highlightColor="#ffffff"
			className={className}
			containerClassName="rounden-lg"
		/>
	)
}

export default SkeletonLoader
