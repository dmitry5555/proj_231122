import Image from 'next/image'
import React, { useState } from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import Form from '@/components/Form'

export default function Home() {
	return (
		<main>
			<div className="px-6 py-12 max-w-screen-xl mx-auto">
				
				<Menu />
			
				<div className="mb-12 w-full grid gap-4">
					<div className="mx-auto text-center">
						<div className="text-3xl font-semibold mb-4 mt-12">Sign Up</div>
					</div>
					{/* <div id="formError" className="">{errorStat}</div> */}
				</div>
				<Form />
			</div>
			<Footer />
		</main>
	)
}
