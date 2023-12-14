import Image from 'next/legacy/image'
import Menu from './Menu'
import Footer from './Footer'

import { redirect } from 'next/navigation'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'


export default async function Home() {
	const session = await getServerSession(options)

	if (!session) {
		redirect('/api/auth/signin?callbackUrl=/server')
	}
	return (
		<div>has session</div>
	)
	
}