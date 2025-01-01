import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const NavBar = () => {
  return (
    <header className="text-white body-font bg-gray-800">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
      
      <span className="ml-3 text-xl font-bold">Blog</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 hover:underline text-lg">Home</Link>
      <Link href={'http://localhost:3000/'} className="mr-5 hover:underline text-lg">About</Link>
      <Link href={'http://localhost:3000/'} className="mr-5 hover:underline text-lg">Blog</Link>
      <Link href={'http://localhost:3000/'} className="mr-5 hover:underline text-lg">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-gray-800 font-medium">
      LinkedIn <FaArrowRight className="ml-2"/>
    </button>
  </div>
</header>

  )
}

export default NavBar