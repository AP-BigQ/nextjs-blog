
import PlaygroundPage from "../../../components/dash/playground-page";
import Head from "next/head";
import dynamic from 'next/dynamic'

import { Suspense } from 'react';
import Nav from "../../../components/dash/nav";


import Toast from "../../../components/dash/toast";
import { CookiesProvider } from 'react-cookie';

export const metadata = {
    title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
    description:
      'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
  };

export default function IndexPage({children}:{children: React.ReactNode}){
    return (


        <div lang="en" className="h-full bg-gray-50">

        <Head> <title>{metadata.title}</title> </Head>

        <CookiesProvider defaultSetOptions={{ path: '/dash' }}>

 
          <Nav />

 
        {children}




    <PlaygroundPage />

    </CookiesProvider>

        
        </div>


    )


   

}