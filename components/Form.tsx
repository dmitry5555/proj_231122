'use client'

import { addUser } from "@/actions/formActions"
import { SubmitButton } from "./sumbitButton"

const Form = () => {
	return (
		<form action={async formData => {
			await addUser(formData)			
		}} className="border rounded border-gray-300 overflow-hidden text-sm max-w-xs p-8 mx-auto">
			<label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
			<input className="w-full rounded border-2 py-2 px-4 mb-4" type="text" name="name" />
			<label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
			<input className="w-full rounded border-2 py-2 px-4 mb-4" type="email" name="email" />
			<SubmitButton />
		</form>
	)
}
export default Form