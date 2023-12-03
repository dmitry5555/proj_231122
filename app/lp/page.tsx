import Image from 'next/image'
import { PrismaClient } from "@prisma/client"
import Menu from '../Menu'

// const prisma = new PrismaClient()

// // Prisma start
// async function main() {
//   // ... you will write your Prisma Client queries here
// 	const user = await prisma.user.create({
// 		data: {
// 		name: "Test User 1155123244123",
// 		email: "3312123123123123",
// 		},
// 	});
// 	const getUsers = await prisma.user.findMany()
// 	console.log(user)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     // console.error(e)
//     await prisma.$disconnect()
//     // process.exit(1)
//   })

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-screen-xl mx-auto">
		<Menu />
	
		
    </main>
  )
}
