import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions as NextAuthConfig } from "next-auth"
import { getServerSession } from "next-auth"

import {authOptions} from "../auth/[...nextauth]"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
   const session = await getServerSession(req, res, authOptions)

   if(session){
    return res.send({
        content: "This is from api/examples/protected"
    })
   }

   res.send({
    error: "errors: no session. PLs sign in"
   })
}