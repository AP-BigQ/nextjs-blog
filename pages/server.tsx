import { useSession } from "next-auth/react"
import Auth from "../components/auth";
import type { GetServerSidePropsContext } from "next"
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function ServerSidePage({session0}){
    console.log({session0})
    const {data} = useSession();

    return (
        <Auth>
            <h1>Server Side Rendering</h1>
            <p>
        This page uses the <strong>getServerSession()</strong> method in{" "}
        <strong>getServerSideProps()</strong>.
      </p>
      <p>
        Using <strong>getServerSession()</strong> in{" "}
        <strong>getServerSideProps()</strong> is the recommended approach if you
        need to support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require
        client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>
      <p>getServerSession()</p>
      {/*<pre>{session0.user.name}</pre>*/ }
{/* <p>{JSON.stringify(session0, null, 2)}</p> */}

<pre>
{JSON.stringify(session0, null, 2)}
</pre>

      <p>useSession()</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>


        </Auth>
    )


}

export async function getServerSideProps(context:GetServerSidePropsContext){

    const session0 = await getServerSession(context.req, context.res,authOptions)

    console.log("server session0...", session0)
    return {
        props:{
            session0
        }
    }

}