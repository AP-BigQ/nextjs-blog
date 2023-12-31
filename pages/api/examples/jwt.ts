// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"

import type { NextApiRequest, NextApiResponse } from "next"
import { useSession, signIn, signOut } from "next-auth/react"


const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req,secret })
  console.log("jwt token", token);
  

  res.send(JSON.stringify(token, null, 2))


}