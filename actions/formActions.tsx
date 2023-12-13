'use server'

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const addUser = async (formData: FormData) => {

	const name = formData.get('name')
	const email = formData.get('email')
	// try {
	await prisma.user.create({
		data: {
			name: name as string,
			email: email as string,
		}
	});
	
	// 	console.log("User added successfully!")
	// 	} catch (error) {
	// 		console.error("Error adding user:", error)
	// 	} finally {
	// 		setIsSubmitting(false)

	// }
}
