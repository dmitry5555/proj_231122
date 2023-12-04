
export default function Footer() {
	return (
		<div className='grid bg-zinc-100'>
			<div className="px-6 py-12 max-w-screen-xl mx-auto w-full ">
				<div className="grid grid-cols-1 md:grid-cols-4">
					<div>
						<div className="italic text-zinc-400 mb-4">Logo</div>
						<div className="text-sm mb-4">Prisma simplifies database access, saves repetitive CRUD boilerplate and increases type safety.</div>
					</div>
					<div></div>
					<div>
						<div className="text-sm mb-4 font-medium">Product</div>
						<div className="text-sm mb-4 text-zinc-500">Docs</div>
						<div className="text-sm mb-4 text-zinc-500">Get started</div>
						<div className="text-sm mb-4 text-zinc-500">Prisma Examples</div>
						<div className="text-sm mb-4 text-zinc-500">Data Guide</div>
						<div className="text-sm mb-4 text-zinc-500">Prisma in your Stask</div>
						<div className="text-sm mb-4 text-zinc-500">Commmunity</div>
					</div>
					<div>
						<div className="text-sm mb-4 font-medium">Resources</div>
						<div className="text-sm mb-4 text-zinc-500">About</div>
						<div className="text-sm mb-4 text-zinc-500">Blog</div>
						<div className="text-sm mb-4 text-zinc-500">Careers</div>
						<div className="text-sm mb-4 text-zinc-500">Events</div>
						<div className="text-sm mb-4 text-zinc-500">Causes</div>
					</div>
				</div>
			</div>
		</div>
	)
}