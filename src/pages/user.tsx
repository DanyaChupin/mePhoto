import { FC } from 'react'
import Layout from '../components/layout/Layout'
import UserProfile from '../components/screens/user/UserProfile'

const UserPage: FC = () => {
	return (
		<Layout>
			<UserProfile />
		</Layout>
	)
}

export default UserPage
