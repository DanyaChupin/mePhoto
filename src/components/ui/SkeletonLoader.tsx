import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import cn from 'classnames'
import { FC } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#F4F6FB"
			highlightColor="#ffffff"
			className={cn('rounded-lg', className)}
			containerClassName=" flex h-[500px] w-full"
		/>
	)
}

export default SkeletonLoader
