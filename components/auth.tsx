import Header from "./header"
import Footer from "./footer"


import type { ReactNode } from "react"

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}