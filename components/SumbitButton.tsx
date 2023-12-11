import { useFormStatus } from 'react-dom'

export function SubmitButton() {
	const { pending } = useFormStatus() 

	return (
		<button className="mr-8 bg-sky-600 px-6 py-2 rounded text-white border-2 border-transparent font-light" 
				type="submit"
				disabled={pending}>
				Sign Up
		</button>
	)
}

