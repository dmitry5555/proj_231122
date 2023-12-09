
'use client' // Error components must be Client Components

import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
	<main>
		<div className="px-6 py-12 max-w-screen-xl mx-auto">
			
		
			<div className="mb-12 w-full grid gap-4">
				
				<h2 className='text-red-500 mx-auto'>⛔️ Something went wrong!</h2>
				<button
					onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
					}
				>
					Try again
				</button>
			</div>

		</div>
	</main>
  )
}