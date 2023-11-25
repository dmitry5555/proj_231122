import Image from 'next/image'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
	const user = await prisma.user.create({
		data: {
		name: "Test User 1155123244123",
		email: "3312123123123123",
		},
	});
	const getUsers = await prisma.user.findMany()
	console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    // console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
  })


export default function Home() {
  return (
    <main className="flex">
		<div className="max-w-screen-xl mx-auto px-5">
			<div className="grid grid-cols-3 gap-0 justify-center items-center">
				<div className="text-center">logo</div>
				<div className="text-center">menu</div>
				<div className="text-center">try for free</div>
			</div>
			<div className="grid items-center">
				<div className="grid grid-cols-5 gap-0">
					<div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">Custom 2 Domains</div>
					<div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">Custom Domains <svg viewBox="0 0 256 256" className="w-5 h-5" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg></div>
					<div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">Custom Domains</div>
					<div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">Custom Domains</div>
					<div className="border-b border-slate-200 font-medium text-sm py-3 px-5 odd:bg-slate-50">Custom Domains</div>
				</div>
			</div>
		</div>
    </main>
  )
}
