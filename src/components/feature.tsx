import React from 'react'

const FeaturePage = () => {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>Sara Atif : Navigation the Secrets of Technology in Tech Chronicles Blog!</h2>

        <p className="text-center m-4 mt-4 text-base md:text-lg text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">Sara Atif is a seasoned tech writer with a deep interest in web development, programming languages, and emerging technologies. With years of hands-on experience, they break down complex concepts into easy-to-understand articles, helping developers and tech enthusiasts stay up-to-date with the latest trends and tools in the industry.</p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring Our Categories
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "Next.js",
              "Web Development",
              "Java Script"
            ].map((category, index) => (
              <div key={index}
              className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center  text-neutral-600'>
                <p className='text-center text-lg font-semibold'>{category}</p>

                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'></div>

              </div>
            ))}
          </div>
        </div>

        <p className='text-base md:text-lg text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>Welcome to Sara Atif Dynamic Blog. Here, we are passionate about sharing insights, expertise, and innovative ideas to help you stay ahead in the ever-evolving digital landscape. Explore our blog to discover the latest trends, best practices, and success stories in web development, technology, and more. Your journey to staying informed and inspired starts here</p>
      </section>
    </div>
  )
}

export default FeaturePage