
export default function Menu() {
	return (
		<div className='grid md:grid-cols-3'>
			<div className='grid items-center'>
				<a href="">logo</a>
			</div>
			<div className='grid md:grid-cols-4 md:place-items-center mt-4 md:mt-0 mb-4 md:mb-0'>
				<a href="" className='text-sm'>Main</a>
				<a href="" className='text-sm'>About</a>
				<a href="" className='text-sm'>Pricing</a>
				<a href="" className='text-sm'>Contact</a>
			</div>
			<div className='grid md:grid-cols-2 md:items-center md:place-items-end'>
				<a href="" className='text-sm'>Log in</a>
				<button className='text-md w-fit mt-2 text-white mb-2 rounded-full bg-blue-600 px-4 py-1.5'>Try for free</button>
			</div>
		</div>
	)
}