import Image from 'next/image'
import { PrismaClient } from "@prisma/client"
import Menu from '../Menu'
import Footer from '../Footer'

export default function Home() {
	const addUser = async(formData: FormData) => {
		"use server"

		const name = formData.get('name')
		console.log(name)
	}

  return (
    <main>
		<div className="px-6 py-12 max-w-screen-xl mx-auto">
			
			<Menu />		
		
			<div className="mb-12 w-full grid gap-4">
				<form className="max-w-xs shadow p-8 mx-auto" action={addUser} method="POST">
					<label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
					<input className="max-w-full rounded border-2 py-2 px-4 mb-4" type="text" name="name" />
					<button className="py-2 px-4 bg-sky-600  text-white rounded" type="submit">Submit</button>
				</form>
			</div>

		</div>
		<Footer />
    </main>
  )


  
}
