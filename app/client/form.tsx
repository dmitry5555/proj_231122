'use client'

import { useState } from "react"
import SuccessResult from "@/actions/gettext"
import { addUser } from "@/actions/formActions"


const UserForm = () => {
	const [isOk, setIsOk] = useState<boolean>(false)
	console.log(isOk)

	const getTextHandler = (formData: FormData) => {
		addUser(formData)
		setIsOk(true)
	}

	return(
		<form action={getTextHandler}>
			<p>input name</p>
			<input className="border-2" type="text" name="name" />
			<p>input email</p>
			<input className="border-2" type="text" name="email" />
			{/* <button type="button" onClick={() => getTextHandler}>click</button> */}
			<button type="submit">click</button>
			{isOk && <SuccessResult />}

		</form>
	)
}

export default UserForm