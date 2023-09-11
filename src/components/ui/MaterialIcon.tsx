import * as MaterialIcons from 'react-icons/md'
import { FC } from 'react'
import { TypeMaterialIconName } from '../../types/icon.types'

interface IIcon {
	name: TypeMaterialIconName
	style?: string
	onClick?: () => void
}

const MaterialIcon: FC<IIcon> = ({ name, style, onClick }) => {
	if (!name) return
	const IconComponent = MaterialIcons[name]
	return <IconComponent onClick={onClick} className={style} />
}

export default MaterialIcon
