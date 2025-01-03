import React from 'react'
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}



const BlogCard = ({ post, isDarkBackground }: BlogCardProps) => {
  return (
    <Card className={`p-4 ${isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <Image src={post.imageUrl} alt={post.title} width={450} height={450}
        className='w-full h-48 object-cover rounded-t-lg' />

      <CardTitle className="text-2xl font-normal mt-4 text-center">{post.title}</CardTitle>
      <br />
      <CardContent className="text-center text-lg">
        <p>{post.description}</p>
      </CardContent>

      <div className='flex flex-col items-center mt-4'>
        <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}></p>

        <Link href={`/posts/${post.id}`}
          className={`w-full px-6 py-3 text-center font-semibold text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkBackground ? 'bg-black hover:border-red-500' : 'bg-black hover:bg-red-500'}`}> 
          Read  More</Link>
      </div>
      </Card>



      )
 
}

      export default BlogCard