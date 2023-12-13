import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const dbUserAdd = async (name, email) => {
	const user = await prisma.user.create({
		data: {
			name: name as string,
			email: email as string,
		}
	})
	if (!user) throw new Error('failed to fetch') 
	return user
}