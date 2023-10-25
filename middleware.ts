import { withAuth } from "next-auth/middleware"

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth(
      // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if(req.nextauth.token)
    console.log("middleware token",req.nextauth.token);
    else
        console.log("no token retrived yet");
    
  },
    {
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === "/admin") {
        if(!token)
            console.log("no token retrived yet");    
            
        return token?.userRole === "admin"
      }
      // `/me` only requires the user to be logged in
      return !!token
    },
  },
})

export const config = { matcher: ["/admin", "/me"] }