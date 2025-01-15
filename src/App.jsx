// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Brands from './components/Home/Brands'
import FeaturedProducts from './components/Home/FeaturedProducts'

export default function App() {
  return (
    <div>
        <Navbar/>
        <main className='bg-[#f0eeee] px-14 py-14'>
          <Brands/>
          <FeaturedProducts/>
        </main>
    </div>
  )
}
