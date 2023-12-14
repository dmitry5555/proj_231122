// import AcmeLogo from '@/app/ui/acme-logo';
// import LoginForm from '@/app/ui/login-form';
import Form from '@/components/Form'

export default function LoginPage() {
  return (
	<main>
		<div className="px-6 py-12 max-w-screen-xl mx-auto">
			<form action="" className="border rounded border-gray-300 overflow-hidden text-sm max-w-xs p-8 mx-auto">
				<label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
				<input className="w-full rounded border-2 py-2 px-4 mb-4" type="text" name="name" />
				<label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
				<input className="w-full rounded border-2 py-2 px-4 mb-4" type="email" name="email" />
				<button type="submit" className="px-4 py-2 border-2">OK</button>
			</form>
		</div>
	</main>

  )
}