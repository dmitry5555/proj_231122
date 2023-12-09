import Image from 'next/image'
import { PrismaClient } from "@prisma/client"
import Menu from '../Menu'
import Footer from '../Footer'

// const prisma = new PrismaClient()

// // Prisma start
// async function main() {
//   // ... you will write your Prisma Client queries here
// 	const user = await prisma.user.create({
// 		data: {
// 		name: "Test User 1155123244123",
// 		email: "1331112",
// 		},
// 	});
// 	const getUsers = await prisma.user.findMany()
// 	console.log(user)
// 	console.log(getUsers)
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
    <main>
		<div className="px-6 py-12 max-w-screen-xl mx-auto">
			
			<Menu />		
		
			{/* 1st */}
			<div className="mb-12 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
						
				<div className='grid bg-white-100 place-items-center items-center'>
					<Image className=''
						alt=''
						src='/lp1.jpg'
						layout="responsive"
						objectFit="contain"
						width={1920}
						height={1080}
					/>
				</div>

				<div className='md:my-24'>
					<div className='grid'>
						<div className='text-6xl font-bold text-zinc-800 mb-8'><h1> Database Client for TypeScript and Node.js</h1></div>
							<div> 
								<p className='mb-8 text-lg '>The Prisma Client works seamlessly across languages and databases. Ship faster by writing less SQL. Avoid mistakes with a fully type-safe API tailored specifically for your app.
	</p>
							</div>
						<div>
							<button className='bg-zinc-800 px-6 py-2 rounded text-white border-2 border-transparent font-light mr-3'>Learn more</button>
							<button className='bg-white px-6 py-2 rounded font-light border-2 '> <a href="/lp"> Get started</a></button>
						</div>
					</div>
				</div>
			
			</div>

			{/* prisma client */}

			<div className="mx-auto text-center">
				<div className='text-sky-600 mb-4 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>PRISMA CLIENT</div>
				<div className="text-5xl font-bold mb-4">Prisma Client API</div>
				<p className="mx-auto text-lg text-zinc-500 mb-12 md:max-w-3xl">From simple reads to complex nested writes, the Prisma Client supports a wide range of operations to help you make the most of your data.</p>
			</div>

			{/* editor integration */}

			<div className="mb-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
						
				<div className='grid bg-white-100 place-items-center items-center'>
					<Image className=''
						alt=''
						src='/pr2.png'
						layout="responsive"
						objectFit="contain"
						width={1920}
							height={1080}
					/>
				</div>

				<div className='md:my-24'>
					<div className=''>
						<div className='text-sky-600 mb-4 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>Prisma Migrate</div>

						<div className='text-2xl font-medium text-zinc-800 mb-4'><h3> Hassle-free migrations</h3></div>
							<div> 
								<p className='mb-6 text-zinc-500'>The Prisma Client works seamlessly across languages and databases. Ship faster by writing less SQL. Avoid mistakes with a fully type-safe API tailored specifically for your app.
	</p>
							</div>
						<div>
							<div className="text-sm mb-3"><svg className="inline mr-3 w-5" viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>Flexibility of moving fast</div>
							<div className="text-sm mb-3"><svg className="inline mr-3 w-5" viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>Unify data access</div>
							<div className="text-sm mb-4"><svg className="inline mr-3 w-5" viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>Generate everything from code</div>
							<button className='mr-4 border-transparent w-fit mt-2 text-white mb-2 border-2 rounded-full bg-sky-600 px-4 py-1.5'>Start trial</button>
							<button className='w-fit mt-2 text-sky-600 mb-2 border-0 border-sky-600 rounded-full px-4 py-1.5'>Learn more</button>
						</div>
					</div>
				</div>
			
			</div>


			<div className="mb-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8">

				<div className='md:my-24'>
					<div className=''>
						<div className='text-sky-600 mb-4 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>Prisma ORM</div>

						<div className='text-2xl font-medium text-zinc-800 mb-4'><h3> The ORM that plays well with any framework</h3></div>
							<div> 
								<p className='mb-6 text-zinc-500'>	Easy to integrate into your framework of choice, Prisma simplifies database access, saves repetitive CRUD boilerplate and increases type safety. It s the perfect database toolkit for building robust and scalable web APIs.
		</p>
							</div>
						<div>
							<div className="text-sm mb-3"><svg className="inline mr-3 w-5" viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>Only responsible for sending queries</div>
							<div className="text-sm mb-3"><svg className="inline mr-3 w-5" viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>Combine with any HTTP</div>
							<div className="text-sm mb-4"><svg className="inline mr-3 w-5" viewBox="0 0 256 256" astro-icon="ph:check-circle-fill"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"></path></svg>Implement route controller</div>
							<button className='mr-4 border-transparent w-fit mt-2 text-white mb-2 border-2 rounded-full bg-sky-600 px-4 py-1.5'>Build REST API</button>
							{/* <button className='w-fit mt-2 text-sky-600 mb-2 border-0 border-sky-600 rounded-full px-4 py-1.5'>Learn more</button> */}
						</div>
					</div>
				</div>
				
				<div className='grid bg-white-100 place-items-center items-center'>
					<Image className=''
						alt=''
						src='/pr1.png'
						layout="responsive"
						objectFit="contain"
						width={1920}
							height={1080}
					/>
				</div>
			
			</div>
			<div className='mx-auto '>
				<div className='text-5xl font-bold mb-4 '>
					Prisma Migrate  <span className='text-sky-600'>auto-generates</span> SQL migrations
				</div>
				<p className='text-lg text-slate-500 mb-12'>All generated SQL migration files are fully customizable. Prisma Migrate hence provides the flexibility of an imperative migration tool by enabling you to modify what and how migrations are executed (and allows you to run custom SQL to e.g. make use of native database feature, perform data migrations).
	</p>

			</div>

			<div className="mb-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className='p-6 rounded-xl bg-zinc-100 border shadow-sm hover:shadow-lg'>
					<div className='max-w-xs mx-auto opacity-50'>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="black" className="">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
						</svg>
					</div>
					<div className='text-sky-600 mb-2 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>Next.js</div>
					<div className='mb-2 font-semibold text-2xl'>Next.js</div>
					<div className=''>Easiest way to work with a database for this popular React framework.</div>
				</div>
				<div className='p-6 rounded-xl bg-zinc-100 border shadow-sm hover:shadow-lg'>
					<div className='max-w-xs mx-auto opacity-50'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
					</svg>

					</div>
					<div className='text-sky-600 mb-2 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>GraphQL</div>
					<div className='mb-2 font-semibold text-2xl'>GraphQL</div>
					<div className=''>Query databases from your GraphQL servers easily with Prisma.</div>
				</div>
			</div>

			<div className="mb-20 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className='p-6 rounded-xl bg-zinc-100 border shadow-sm hover:shadow-lg'>
					<div className='max-w-xs mx-auto opacity-50'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="">
						<path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
					</svg>

					</div>
					<div className='text-sky-600 mb-2 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>NestJS</div>
					<div className='mb-2 font-semibold text-2xl'>NestJS</div>
					<div className=''>	Integrate Prisma with this popular server-side application framework.</div>
				</div>
				<div className='p-6 rounded-xl bg-zinc-100 border shadow-sm hover:shadow-lg'>
					<div className='max-w-xs mx-auto opacity-50'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
					</svg>

					</div>
					<div className='text-sky-600 mb-2 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>Apollo</div>
					<div className='mb-2 font-semibold text-2xl'>Apollo</div>
					<div className=''>	Integrate Prisma with one of the most popular GraphQL platforms.</div>
				</div>
				<div className='p-6 rounded-xl bg-zinc-100 border shadow-sm hover:shadow-lg'>
					<div className='max-w-xs mx-auto opacity-50'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="">
						<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
					</svg>

					</div>
					<div className='text-sky-600 mb-2 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>hapi</div>
					<div className='mb-2 font-semibold text-2xl'>hapi</div>
					<div className=''>Query databases with ease from this backend framework.</div>
				</div>
			</div>

			<div className="mx-auto text-center">
				<div className='text-sky-600 mb-4 rounded-full bg-cyan-50 border border-sky-200 px-3 py-1 inline-block font-medium text-xs'>PRISMA CLIENT</div>
				<div className="text-5xl font-bold mb-4">Prisma Client API</div>
				<p className="mx-auto text-lg text-zinc-500 mb-12 md:max-w-3xl">From simple reads to complex nested writes, the Prisma Client supports a wide range of operations to help you make the most of your data.</p>
			</div>

			<div className='grid md:grid-cols-3 gap-4 my-4'>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
					</svg>
					<p className='font-semibold text-lg mb-2 mt-4'>What is Prisma</p>
					<p className='text-base text-slate-500'>Use Prisma to build a GraphQL or REST API, or as part of a fullstack application. </p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
					</svg>
					<p className='font-semibold text-lg mb-2 mt-4'>Adopting Prisma</p>
					<p className='text-base text-slate-500'>How to perform CRUD operations with your generated Prisma Client API. </p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
					</svg>
					<p className='font-semibold text-lg mb-2 mt-4'>Prisma in your stack</p>
					<p className='text-base text-slate-500'>Migrate to Prisma from other ORMs.</p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
					</svg>
					<p className='font-semibold text-lg mb-2 mt-4'>CRUD</p>
					<p className='text-base text-slate-500'>PostgreSQL: The world’s most advanced open source relational database</p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
					</svg>
					<p className='font-semibold text-lg mb-2 mt-4'>Deployment guides</p>
					<p className='text-base text-slate-500'>Deploy Node.js applications with Prisma Client to platforms like Vercel, AWS Lambda, Netlify and Heroku.</p>
				</div>
				<div className='mb-6'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>	
					<p className='font-semibold text-lg mb-2 mt-4'>Preview features</p>
					<p className='text-base text-slate-500'>Available preview features and how to enable them.</p>
				</div>
			</div>

		</div>
		<Footer />
    </main>
  )
}
