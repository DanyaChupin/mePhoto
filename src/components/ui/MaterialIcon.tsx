import * as MaterialIcons from 'react-icons/md'
import { ChangeEvent, FC } from 'react'
import { TypeMaterialIconName } from '../../types/icon.types'

interface IIcon {
	name: TypeMaterialIconName
	style?: string
	onClick?: (e: ChangeEvent<HTMLFormElement>) => void
}

const MaterialIcon: FC<IIcon> = ({ name, style, onClick }) => {
	if (!name) return
	const IconComponent = MaterialIcons[name]
	return <IconComponent onClick={onClick} className={style} />
}

export default MaterialIcon
