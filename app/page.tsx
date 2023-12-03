import Image from 'next/image'
import Menu from './Menu'

import { PrismaClient } from "@prisma/client"

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
		<div className="mb-12 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
		
			<div className='my-48'>
				<div className='grid'>
					<div className='text-6xl font-bold mb-6'><h1>Intuitive Database Client for TypeScript</h1></div>
						<div> 
							<p className='mb-6 text-lg'>Amplication is an open-source development tool. It helps you develop quality Node.js applications without spending time on repetitive coding tasks. It’s perfect for both backend and fullstack developers.</p>
						</div>
					<div>
					<button className='bg-black px-6 py-2 rounded text-white border-2 border-transparent font-light mr-3'>Join us</button>
					<button className='bg-white px-6 py-2 rounded font-light border-2 '> <a href="/lp"> Learn more</a></button>
					</div>
				</div>
			</div>
			<div className='grid bg-white-100 w-full place-items-center'>
				<Image
					alt=''
					src="/prism.png"
					width={100}
					height={100}
					layout='responsive'
				/>
			</div>
			{/* <div className="grid grid-cols-3 gap-0 justify-center items-center">
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
				<div className="grid bg-gray-500 px-2 py-2">
						<input className=" px-2" type="text" placeholder="addUser"/>
				</div>
			</div> */}
			
		</div>

		<div className='grid grid-cols-1 gap-4 mb-48'>
				<p className='text-sm mb-6 '>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
				<p className='text-sm mb-6 '>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
				<p className='text-base mb-6 '>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
				<p className='text-lg mb-6 '>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>

				<p className='text-2xl mb-6 '>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
				<p className='text-5xl font-medium'>Prisma Migrate auto-generates SQL migrations from your Prisma schema. </p>
		</div>

		<div className='grid md:grid-cols-2 my-4 gap-4 mb-48'>
			<div className=''>
				<p className='mb-6 font-extralight'>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
				<p className='mb-6 font-light'>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
				<p className='mb-6 font-normal'>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
			</div>
			<div className=''>
				<p className='mb-6 font-medium'>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
				<p className='mb-6 font-semibold'>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
				<p className='mb-6 font-bold'>Prisma Migrate auto-generates SQL migrations from your Prisma schema. These migration files are fully customizable, giving you full control and ultimate flexibility — from local development to production environments.</p>
			</div>
		</div>

		<div className='grid gap-4 px-6rounded-lg bg-slate-800 mx-auto text-center py-8 mb-48'>
			<p className='text-3xl font-bold text-slate-200'>The Amplication stack</p>
			<p className='text-lg text-slate-400'>Amplication generates application code for you with the same building blocks they use themselves internally. The tools are all proven open-source and popular among the respective developer communities.</p>
			<button className='mt-2 mx-auto block px-6 py-2 rounded text-white border-2 '>Join us</button>
		</div>
		
		<div className='grid gap-4 mt-12 mb-48'>
			<div className='grid gap-4'>
				<div className='text-3xl font-semibold mb-6'>What’s ahead for Amplication</div>
				<div className='text-lg text-slate-500 mb-6'>Amplication is continuing to grow quickly and expected to double their team in the coming year. Already showing success with their current product, they are enthusiastic to continue working on an extensive roadmap full of interesting new features.</div>
			</div>
			<div className='grid md:grid-cols-3 gap-4 my-4'>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" /></svg>
					<p className='font-semibold text-lg mb-2 mt-4'>NestJS</p>
					<p className='text-base text-slate-500'>NestJS: A progressive Node.js framework for building efficient, reliable and scalable server-side applications </p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
					<p className='font-semibold text-lg mb-2 mt-4'>Prisma</p>
					<p className='text-base text-slate-500'>Prisma: A next-generation ORM for Node.js and TypeScript</p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>
					<p className='font-semibold text-lg mb-2 mt-4'>GraphQL</p>
					<p className='text-base text-slate-500'>GraphQL: A query language for APIs</p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>
					<p className='font-semibold text-lg mb-2 mt-4'>PostgreSQL</p>
					<p className='text-base text-slate-500'>PostgreSQL: The world’s most advanced open source relational database</p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
					<p className='font-semibold text-lg mb-2 mt-4'>Swagger UI</p>
					<p className='text-base text-slate-500'>Swagger UI: Visual documentation for REST APIs based on OpenAPI specification</p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
					<p className='font-semibold text-lg mb-2 mt-4'>Jest</p>
					<p className='text-base text-slate-500'>Jest: A delightful JavaScript testing framework with a focus on simplicity</p>
				</div>
			</div>
		</div>

		<div>
		

			<div className='grid mb-6'>
				<div className='text-3xl font-semibold mb-12'>
					Color palette 
				</div>

				<div className='grid  gap-4 mb-24'>
					<div className='h-32 min-w-full rounded bg-[#FAFAFA] px-4 py-4'>F6F1F1</div>
					<div className='h-32 min-w-full rounded bg-[#C7EEFF] px-4 py-4'>F6F1F1</div>
					<div className='h-32 min-w-full rounded bg-[#0077C0] px-4 py-4'>F6F1F1</div>
					<div className='h-32 min-w-full rounded bg-[#1D242B] px-4 py-4'>F6F1F1</div>
				</div>

			</div>


			<div className='border rounded border-gray-300 overflow-hidden'>
				<div className='grid grid-cols-5 bg-white px-4 py-3 border-bottom border-gray-200 text-sm'>
					<div className='font-semibold'>Custom Domains</div>
					<div>Single Subdomain</div>
					<div>1 Custom Domain</div>
					<div>5 Custom Domain</div>
					<div>10 Custom Domain</div>
				</div>
				<div className='grid grid-cols-5 bg-gray-50 px-4 py-3 border-b border-gray-200 text-sm'>
					<div className='font-semibold'>API Access</div>
					<div>-</div>
					<div>-</div>
					<div>
						<svg viewBox="0 0 256 256" class="w-5 h-5" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>
					</div>
					<div>
						<svg viewBox="0 0 256 256" class="w-5 h-5" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>
					</div>
				</div>
				<div className='grid grid-cols-5 bg-white px-4 py-3 border-b border-gray-200 text-sm'>
					<div className='font-semibold'>Data Export</div>
					<div>Basic</div>
					<div>Advanced</div>
					<div>Advanced</div>
					<div>Advanced</div>
				</div>
				<div className='grid grid-cols-5 bg-gray-50 px-4 py-3 border-b border-gray-200 text-sm'>
					<div className='font-semibold'>SSO Integration</div>
					<div>-</div>
					<div>-</div>
					<div>-</div>
					<div>
						<svg viewBox="0 0 256 256" class="w-5 h-5" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>
					</div>
				</div>
				<div className='grid grid-cols-5 bg-white px-4 py-3 border-bottom border-gray-200 text-sm'>
					<div className='font-semibold'>Custom Domains</div>
					<div>Limited</div>
					<div>Limited</div>
					<div>Limited</div>
					<div>Unlimited</div>
				</div>
	 		 </div>

			 <div className='grid mx-auto my-12'>
				<div className='mx-auto text-center'>
					<h1 className='text-3xl font-semibold mb-4'>Pricing</h1>
					<p className='text-lg text-slate-500 mb-12'>Choose the right plan for your workspace</p>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<div className='rounded-md px-6 py-5 border border-gray-200'>
						<div className='mb-2'>Pro</div>
						<div className='mb-2'>
							$<span className='font-semibold text-3xl'>49</span> /month
						</div>
						<div className='text-sm text-gray-500 mb-8'>Growing for business success</div>
						<div className='text-sm mb-3'>
							<svg className='inline mr-3 w-5' viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>
							10 projects
						</div>
						<div className='text-sm'>
							<svg className='inline mr-3 w-5' viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>
							Standard support
						</div>
					</div>
					<div className='rounded-md px-6 py-5 border border-gray-200'>
						<div className='mb-2'>Business</div>
						<div className='mb-2'>
							$<span className='font-semibold text-3xl'>299</span> /month
						</div>
						<div className='text-sm text-gray-500 mb-8'>For mission-critical apps</div>
						<div className='text-sm mb-3'>
							<svg className='inline mr-3 w-5' viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>
							15 projects
						</div>
						<div className='text-sm'>
							<svg className='inline mr-3 w-5' viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>
							Premium support
						</div>
					</div>
				</div>
			 </div>

		</div>
		<div className='mx-auto text-center'>
			<div className='text-3xl font-semibold mb-4'>
				Next-generation Node.js and TypeScript ORM
			</div>
			<p className='text-lg text-slate-500 mb-12'>Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.
</p>

		</div>
		<div className="mb-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
			<div className='p-6 rounded-xl bg-gray-100 border shadow-sm hover:shadow-lg'>
				<div className='text-blue-800 mb-2 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 inline-block font-medium text-xs'>Prisma ORM</div>
				<div className='mb-2 font-semibold text-2xl'>What is Prisma</div>
				<div className=''>An overview of what Prisma ORM is and how it works.</div>
			</div>
			<div className='p-6 rounded-xl bg-gray-100 border shadow-sm hover:shadow-lg'>
				<div className='text-blue-800 mb-2 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 inline-block font-medium text-xs'>Prisma ORM</div>
				<div className='mb-2 font-semibold text-2xl'>Prisma in your stack</div>
				<div className=''>An overview of what Prisma ORM is and how it works.</div>
			</div>
			<div className='p-6 rounded-xl bg-gray-100 border shadow-sm hover:shadow-lg'>
				<div className='text-blue-800 mb-2 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 inline-block font-medium text-xs'>Prisma ORM</div>
				<div className='mb-2 font-semibold text-2xl'>CRUD</div>
				<div className=''>An overview of what Prisma ORM is and how it works.</div>
			</div>
		</div>		

    </main>
  )
}
