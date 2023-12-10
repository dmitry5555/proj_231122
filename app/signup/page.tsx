import Image from 'next/image'
import Menu from '../Menu'
import Footer from '../Footer'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default function Home() {

	const formAddUser = async (formData: FormData) => {
		"use server"

		const name = formData.get('name')
		const email = formData.get('email')


		try {
			await prisma.user.create({
				data: {
				name: name as string,
				email: email as string,
				}
			});

			console.log("User added successfully!");

			} catch (error) {
				console.error("Error adding user:", error);
		}
	}

	return (
		<main>
			<div className="px-6 py-12 max-w-screen-xl mx-auto">
				
				<Menu />
			
				<div className="mb-12 w-full grid gap-4">
					<div className="mx-auto text-center">
						<div className="text-3xl font-semibold mb-4 mt-12">Sign Up</div>
					</div>
					<form action={formAddUser} className="border rounded border-gray-300 overflow-hidden text-sm max-w-xs p-8 mx-auto">
						<label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
						<input className="max-w-full rounded border-2 py-2 px-4 mb-4" type="text" name="name" />
						<label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
						<input className="max-w-full rounded border-2 py-2 px-4 mb-4" type="email" name="email" />
						<button className="mr-8 bg-sky-600 px-6 py-2 rounded text-white border-2 border-transparent font-light" type="submit">Sign Up</button>
					</form>
					{/* <div id="formError" className="">{errorStat}</div> */}
				</div>
		
			</div>
			<Footer />
		</main>
	)
}
