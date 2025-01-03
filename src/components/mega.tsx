import React from 'react'
import BlogCard from '../components/blogcard'


const MegaPage = () => {
  const posts =[
    {
      id:'1',
      title:'HTML Block of Webdevelopment',
      description:'HTML (HyperText Markup Language) is the standard language used to create and structure content on the web.',
      date:'2024-12-26',
      imageUrl:"/images/html.jpeg",
    },
    {
      id:'2',
      title:'CSS Block of Webdevelopment',
      description:"CSS (Cascading Style Sheets) is used to define the visual appearance and layout of HTML elements on a web page.",
      date:'2024-12-26',
      imageUrl:"/images/css.jpg",
    },
    {
      id:'3',
      title:'JavaScript Block of Webdevelopment',
      description:"JavaScript (JS) is a programming language used to create interactive and dynamic content on web pages.",
      date:'2024-12-26',
      imageUrl:"/images/js.jpeg",
    },
    {
      id:'4',
      title:'React Block of Front-end Development',
      description:"React is a JavaScript library for building user interfaces, particularly single-page applications, using reusable components and a virtual DOM for efficient rendering.",
      date:'2024-12-26',
      imageUrl:"/images/react.jpeg",
    },
    {
      id:'5',
      title:'Angular Block of Front-end Development',
      description:"Angular is a platform and framework for building dynamic, single-page web applications using TypeScript, with a focus on modularity and dependency injection.",
      date:'2024-12-26',
      imageUrl:"/images/angular.jpeg",
    },
    {
      id:'6',
      title:'Bootstrap of Front-end Development',
      description:"Bootstrap is a popular open-source front-end framework for developing web pages, providing pre-designed UI components, layouts, and CSS styles.",
      date:'2024-12-26',
      imageUrl:"/images/bootstrap.jpeg",
    },
    {
      id:'7',
      title:'Node.js Block of Back-end Development',
      description:"Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side, enabling the creation of scalable and fast network applications.",
      date:'2024-12-26',
      imageUrl:"/images/nodejs.png",
    },
    {
      id:'8',
      title:'Python Block of Back-end Development',
      description:"Python is a high-level, interpreted programming language known for its readability and versatility, used in web development and artificial intelligence.",
      date:'2024-12-26',
      imageUrl:"/images/python.jpeg",
    },
    {
      id:'9',
      title:'Ruby Block of Back-end Development',
      description:"Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity, often used in web development.",
      date:'2024-12-26',
      imageUrl:"/images/ruby.jpeg",
    },
    {
      id:'10',
      title:'PHP Block of Back-end Development',
      description:"PHP is a server-side scripting language designed for web development, used to create dynamic and interactive web pages by embedding code within HTML.",
      date:'2024-12-26',
      imageUrl:"/images/php.jpeg",
    },
    {
      id:'11',
      title:'Cyber Security Block of Webdevelopment',
      description:"Cybersecurity is the practice of protecting systems, networks, and data from digital attacks and damage to ensure confidentiality and availability.",
      date:'2024-12-26',
      imageUrl:"/images/cybersecurity.jpeg",
    },
    {
      id:'12',
      title:'Lamp Stack Block of Full-stack Development',
      description:"LAMP stack is a set of open-source software used for web development, Apache (web server) and PHP/Python/Perl.",
      date:'2024-12-26',
      imageUrl:"/images/lamp.jpeg",
    },
  ]
  return (
    <div className='my-8'>
      <h1 className='text-5xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring the world of AI and Technology</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default MegaPage