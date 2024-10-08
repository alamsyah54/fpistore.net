import Footer from "@/components/shared/Footer"
import Loading from "@/components/shared/Loading"
import Navbar from "@/components/shared/Navbar"

import React, { Suspense } from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      <main className='relative font-roboto'>
        <Navbar />
        <div className='flex'>
          <div className='flex min-h-screen flex-1 flex-col pt-24 '>
            <div className='mx-auto flex flex-col justify-center items-center w-full p-10'>
              {children}
            </div>
          </div>
        </div>
        <Footer />
        {/* <div className='w-full h-2 fixed bottom-0 bg-green-500 sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-500' /> */}
      </main>
    </Suspense>
  )
}

export default Layout
