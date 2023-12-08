
export default function Menu() {
	return (
		<div className='grid md:grid-cols-3'>
			<div className='grid items-center'>
				<a className="italic text-zinc-400" href="/">Logo</a>
			</div>
			<div className='grid md:grid-cols-4 md:place-items-center mt-4 md:mt-0 mb-4 md:mb-0'>
				<a href="/lp" className='text-sm py-1'>Product</a>
				<a href="" className='text-sm py-1'>Docs</a>
				<a href="" className='text-sm py-1'>Pricing</a>
				<a href="" className='text-sm py-1'>Contact</a>
			</div>
			<div className='grid md:grid-cols-2 md:items-center md:place-items-end'>
				<a href="/signup" className='text-sm py-2'>Signup</a>
				<button className='text-md w-fit mt-2 text-white mb-2 rounded-full bg-sky-600 px-4 py-1.5'>Try for free</button>
			</div>
		</div>
	)
}