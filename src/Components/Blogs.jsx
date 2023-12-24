import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

function Blogs() {
    // step 3: consume
    const {loading,posts}=useContext(AppContext);

  return (
    <div className='w-[80%] md:w-[42%]  py-5 flex flex-col mx-auto my-10'>
        {
            loading ? (<Spinner/>): (
                posts.length === 0 ? (<div><p>No Post Found</p></div>):(
                    posts.map(
                        post => (
                            <div key={post.id} className='my-3 bg-gray-200 p-5 rounded-md shadow-lg'>
                                <h2 className='font-bold text-md'>{post.title}</h2>
                                <p className='text-[15px]'>
                                    By <span className='italic'>{post.author}</span> on <span className=' font-bold underline'>
                                    {post.category}</span>
                                </p>
                                <p className='text-sm'>Posted on {post.date}</p>
                                <p className='text-sm mt-2'>{post.content}</p>
                                <div className='cursor-pointer mt-2'>
                                    {
                                        post.tags.map((tag,index)=>{
                                            return <span className='text-blue-500 underline text-sm font-semibold mr-2' 
                                            key={index}>{`#${tag} `}</span>
                                        })
                                    }
                                </div>
                            </div>
                        )
                    )
                )
            )
        } 
    </div>
  )
}

export default Blogs