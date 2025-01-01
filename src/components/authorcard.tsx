import Image from 'next/image'
import React from 'react'
import AuthorPic from '../../public/images/autorpic.webp'
import Link from 'next/link'

const AuthorCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>


        <Image src={AuthorPic} alt='loading' width={350} height={350} className='w-16 h-16 rounded-full object-cover mr-4 border-2 border-red-500'></Image>

        <div>
          <h3 className='text-xl font-bold'>Sara Atif</h3>
          <p className='text-slate-500'>Web Developer | Teacher | UI/UX Specialist </p>
        </div>
      </div>

      <p className='mt-4 text-black text-base md:text-lg leading-relaxed'>
      Sara Atif is a passionate web developer, educator, and UI/UX specialist. With years of experience in the tech industry, Sara Atif has worked on numerous projects ranging from dynamic websites to user-centered digital experiences. As a dedicated teacher, I have shared my knowledge with aspiring developers, helping them master web technologies and design principles.
      </p>

      <div className='mt-4 flex space-x-3'>
      <Link href={"https://www.facebook.com/"} target="blank"className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
          Facebook
          </Link>
        

          <Link href={"https://www.linkedin.com/in/sara-atif-636852316/"} target="blank" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
          Linkedin
          </Link>
        

          <Link href={"https://github.com/account"} target='blank' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
          GitHub
        </Link>
      </div>

    </div>
  )
}

export default AuthorCard