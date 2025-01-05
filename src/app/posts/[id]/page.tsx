
import React from "react";
import CommentSection from "@/components/commentsec";
import AuthorCard from "@/components/authorcard";
import Image from "next/image";


const posts =[
    {
        id:'1',
        title:'HTML Block of Webdevelopment',
        description:'HTML (HyperText Markup Language) is the standard language used to create and structure content on the web.',
        image:"/images/html.jpeg"
      },
      {
        id:'2',
        title:'CSS Block of Webdevelopment',
        description:"CSS (Cascading Style Sheets) is used to define the visual appearance and layout of HTML elements on a web page.",
        image:"/images/css.jpg"
      },
      {
        id:'3',
        title:'JavaScript Block of Webdevelopment',
        description:"JavaScript (JS) is a programming language used to create interactive and dynamic content on web pages.",
        image:"/images/js.jpeg"
      },
      {
        id:'4',
        title:'React Block of Front-end Development',
        description:"React is a JavaScript library for building user interfaces, particularly single-page applications, using reusable components and a virtual DOM for efficient rendering.",
        image:"/images/react.jpeg"
      },
      {
        id:'5',
        title:'Angular Block of Front-end Development',
        description:"Angular is a platform and framework for building dynamic, single-page web applications using TypeScript, with a focus on modularity and dependency injection.",
        image:"/images/angular.jpeg"
      },
      {
        id:'6',
        title:'Bootstrap of Front-end Development',
        description:"Bootstrap is a popular open-source front-end framework for developing web pages, providing pre-designed UI components, layouts, and CSS styles.",
        image:"/images/bootstrap.jpeg"
      },
      {
        id:'7',
        title:'Node.js Block of Back-end Development',
        description:"Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server side, enabling the creation of scalable and fast network applications.",
        image:"/images/nodejs.png"
      },
      {
        id:'8',
        title:'Python Block of Back-end Development',
        description:"Python is a high-level, interpreted programming language known for its readability and versatility, used in web development and artificial intelligence.",
        image:"/images/python.jpeg"
      },
      {
        id:'9',
        title:'Ruby Block of Back-end Development',
        description:"Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity, often used in web development.",
        image:"/images/ruby.jpeg"
      },
      {
        id:'10',
        title:'PHP Block of Back-end Development',
        description:"PHP is a server-side scripting language designed for web development, used to create dynamic and interactive web pages by embedding code within HTML.",
        image:"/images/php.jpeg"
      },
      {
        id:'11',
        title:'Cyber Security Block of Webdevelopment',
        description:"Cybersecurity is the practice of protecting systems, networks, and data from digital attacks and damage to ensure confidentiality and availability.",
        image:"/images/cybersecurity.jpeg"
      },
      {
        id:'12',
        title:'Lamp Stack Block of Full-stack Development',
        description:"LAMP stack is a set of open-source software used for web development, Apache (web server) and PHP/Python/Perl.",
        image:"/images/lamp.jpeg"
      },
]
export default async function Post({ params }:{params:Promise<{id:string}>} ) {
  const { id } = (await params);
  const post = posts.find((p) => p.id ===id);
  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }
  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
        </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={450}
          height={450}
          className="w-full h-auto rounded-md mt-4"
        />
        
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
     
     <CommentSection postId={post.id} />
      <AuthorCard/>
      
    </div>
  );
}
