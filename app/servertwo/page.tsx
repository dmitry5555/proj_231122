import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// fetching outside
async function fetchData() {
	let data =  await prisma.user.findMany()
	// data = await data.json()
	return data
}

// showing this function on frontend
const Data = async () => {
	let users = await fetchData()
	console.log(users)
	
	return(
		<div>{users[0].id}</div>
	)
}

export default Data