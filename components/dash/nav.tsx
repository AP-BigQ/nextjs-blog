import Navbar from "./navbar";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"

export default  function Nav(){
    //const session = await getServerSession();
    const {data:session} = useSession();
    return <Navbar user={session?.user}/>

}