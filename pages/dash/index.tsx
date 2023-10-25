import Head from "next/head";
import Link from 'next/link';
import dynamic from 'next/dynamic'

import { Suspense } from 'react';
import Nav from "../../components/dash/nav";


import Toast from "../../components/dash/toast";
const NoSSR = dynamic(() => import('../../components/dash/toast'), { ssr: false })

import { CookiesProvider } from 'react-cookie';
import Loading from "../../components/dash/loading";
import Page from "../../components/dash/page";
import { PrismaClient } from '@prisma/client'
import { GetStaticProps, GetStaticPaths } from 'next';
import { usePathname, useSearchParams } from 'next/navigation'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const prisma = new PrismaClient()

export const metadata = {
    title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
    description:
      'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
  };

  interface User{
    id: number;
    name: string;
    username: string;
    email: string;
}
interface dataInterface{
    users: User[];
    description: string
}

export default function IndexPage({children, users}:{children: React.ReactNode, users:User[]}){
    


    return (
        <div lang="en" className="h-full bg-gray-50">

        <Head> <title>{metadata.title}</title> </Head>

        <CookiesProvider defaultSetOptions={{ path: '/dash' }}>

 
          <Nav />
          <Page users = {users}/>
 
        {children}


    <NoSSR />

    </CookiesProvider>

    <h1 >
  Home <Link href="/"> page!</Link>
</h1>

        </div>

    )
}


export  const getServerSideProps = (async ({query}) => {
    // Get external data from the file system, API, DB, etc.
    const filters = query?.q as string ;
    let textFilters = {}
    if(filters){
        textFilters = {
            OR: [
            {
              email: {
                  
                  contains: filters ?? '',             
                  
                  
              },
            },
            {
              name: {
                  contains: filters,
                  
                  
              },
            },
            {
              username: {
                  contains: filters,
                  
                  
              },
            },
            
          ],}
    }
    const users = await prisma.user.findMany({
        where: {
            ...textFilters,
            
}})
    console.log(query?.q)


    //console.log(users)

    //const data = {users:users, description:"User data"}
  

    return {
      props: {
        users
    }
    }
  })satisfies GetServerSideProps<{
    users: User[]
  }>