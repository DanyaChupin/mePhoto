import { FC, useEffect, useState } from 'react'

const Home: FC = () => {
	const [theme, setTheme] = useState('light')
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<button
			className="text font bg-black-500 rounded-image animate-fade"
			onClick={toggleTheme}
		>
			Hello world
		</button>
	)
}

export default Home
