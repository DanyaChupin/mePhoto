import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect: FC = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/1')
	}, [navigate])
	return <></>
}

export default Redirect
