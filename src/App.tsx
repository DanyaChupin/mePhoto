import { useEffect, useState } from 'react'
import './App.scss'

function App() {
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
			className="text-dark-600 transition-all dark:text-2xl dark:text-green-700 dark:font-semibold"
			onClick={toggleTheme}
		>
			Hello world
		</button>
	)
}

export default App
