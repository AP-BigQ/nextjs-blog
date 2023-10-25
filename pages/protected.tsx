import { useSession } from "next-auth/react";


import Auth from "../components/auth"
import { useState, useEffect } from "react"
import AccessDenied from "../components/access-denied";

export default function ProtectedPage(){
    const {data} = useSession();
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const res = await fetch("/api/examples/protected")
            const {content} = await res.json()
            if(content){
                setContent(content)
            }
        }

        fetchData()

    }, [data])

    if(!data){
        return (
            <Auth>
            
            <AccessDenied />

            </Auth>
        )
    }


    return (
        <Auth>
            <h1>Protected Page</h1>
            <p className="text-1xl font-bold underline">
                <strong>{content ?? "\u00a0"}</strong>
            </p>

        </Auth>
    )
}