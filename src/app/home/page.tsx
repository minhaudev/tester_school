import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'
import React from 'react'

export default function Home() {
  return (
    <div>
          <Header />
          <div className='text-primary mt-10 mb-10'>this is a home main!</div>
          <Footer/>
    </div>
  )
}
