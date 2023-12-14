// applies next-auth to entire project
export { default } from "next-auth/middleware"

// applies next-auth to matching routes - can be regex
export const config = { matcher: ["/extra", "/dashboard"] }