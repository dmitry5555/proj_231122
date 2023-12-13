
// import { useEffect, useState } from "react"
// import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient()

// const addUser = async (formData: FormData) => {
		
// 	// "use server"
// 	// setIsSubmitting(true); // Set isSubmitting to true when form submission starts

// 	// const name = formData.get('name')
// 	// const email = formData.get('email')
// 	// try {
// 	// prisma.user.create({
// 	// 	data: {
// 	// 		// name: name as string,
// 	// 		// email: email as string,
// 	// 		name: '123',
// 	// 		email: 'test@123.1'
// 	// 	}
// 	// })
// }

// const Data = () => {
// 	const [product, setProduct] = useState([])

// 	useEffect(() => {
// 		async function fetchData() {
// 			let data = addUser
// 			console.log(data)
// 		}
// 	})
// }
const ClientComponent = () => {
	console.log('Hi from Client')
	return <div>
		<button>Hello</button>

	</div>
} 

const Client = () => {
	return <ClientComponent />
}

export default Client