import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const db_AddUser = async (name, email) => {
	try {
		const user = await prisma.user.create({
			data: {
				name: name,
				email: email,
			}
		})
		return user
	} catch (error) {
		console.error("Error ..", error)
		throw error
	}
}
		
