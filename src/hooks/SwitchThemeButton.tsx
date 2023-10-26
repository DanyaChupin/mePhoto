import { FC, useEffect, useState } from 'react'
import MaterialIcon from '../components/ui/MaterialIcon'

const SwitchThemeButton: FC = () => {
	const [theme, setTheme] = useState('light')
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])
	return (
		<button onClick={toggleTheme}>
			<MaterialIcon name={theme === 'dark' ? 'MdSunny' : 'MdModeNight'} />
		</button>
	)
}

export default SwitchThemeButton
