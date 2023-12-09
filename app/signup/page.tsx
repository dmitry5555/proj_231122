import Image from 'next/image'
import { PrismaClient } from "@prisma/client"
import Menu from '../Menu'
import Footer from '../Footer'

const Prisma = new PrismaClient()
// const [errorStat, setErrorStat] = useState('');


export default function Home() {
	const AddUser = async(formData: FormData) => {
		"use server"

		const Name = formData.get('name')
		const Email = formData.get('email')
		// console.log(name)

		const CheckEmail = await Prisma.user.findMany ({
			where: { email:Email as string }
		})
		// if (checkEmail)
		// {
		// 	errorStat = "this email is already used"
  		// 	return
		// }
		const user = await Prisma.user.create({
			data: {
			  name: Name as string,
			  email: Email as string,
			},
		});
		console.log(user)
	}

  return (
    <main>
		<div className="px-6 py-12 max-w-screen-xl mx-auto">
			
			<Menu />		
		
			<div className="mb-12 w-full grid gap-4">
				<form className="max-w-xs shadow p-8 mx-auto" action="{addUser}" method="POST" encType="multipart/form-data">
						<label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
						<input className="max-w-full rounded border-2 py-2 px-4 mb-4" type="text" name="name" />
						<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
						<input className="max-w-full rounded border-2 py-2 px-4 mb-4" type="email" name="email" />
					<button className="py-2 px-4 bg-sky-600  text-white rounded" type="submit">Submit</button>
				</form>
				{/* <div id="formError" className="">{errorStat}</div> */}
			</div>
	
		</div>
		<Footer />
    </main>
  )
}
