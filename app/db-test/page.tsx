import Link from 'next/link';
import { dbUserAdd } from "@/actions/dbActions";

const ClientComponent = () => {
	'use client'
	console.log('Hi from Client')
	return(
		<>
			<Link href="/clientone">go to clientone page</Link><br/>
			<button onClick={dbUserAdd('111','1222@222.22')}>add user</button>
		</>
	)
}

export default ClientComponent

// export default function DbTest() {
// 	'use client'
// 	return (
// 		// <button onClick={dbUserAdd}></button>
// 		<form action={dbUserAdd}></form>
// 	// console.log(dbUserAdd)
// 	)
// }
