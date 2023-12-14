import type { NextAuthOptions } from 'next-auth'
// import Github from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider ({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username:",
					type: "text",
					placeholder: "your-name"
				},
				password: {
					label: "Password:",
					type: "password",
					placeholder: "your-password"

				},
			},
			async authorize(credentials) {
				const user = { id: "42", name: "admin", password: "123"}

				if (credentials?.username === user.name && credentials?.password === user.password)
				{ return user } 
				else 
				{ return null }
			}
		})
	],
	// pages : {}
} satisfies NextAuthOptions