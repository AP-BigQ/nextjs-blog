import { useSession } from "next-auth/react"
import Auth from "../components/auth"


export default function MePage(){
    const {data} = useSession()

    return (
        <Auth>

            <pre>
                {JSON.stringify(data, null, 1)}
            </pre>

        </Auth>
    )
}