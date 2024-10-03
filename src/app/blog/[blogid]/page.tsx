'use client'
import Comments from '@/components/comments/page';
import React, { useEffect, useState } from 'react'

interface post {
    userId: number;
    id: number;
    title : string;
    body:string;


}

export default function BlogDetails({params}:any) {


    const [postData,setpostData] = useState<post|null>(null)
    const [comments,setcomments] = useState([])

useEffect(()=>{
    getSpecificPost()
}, []);


    const getSpecificPost =async()=>{
        const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogid}`)
        if(response.ok){
        const specificData = await response.json()
        setpostData(specificData);
        const commentsresponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogid}/comments`)
        const commentsData = await commentsresponse.json()
        setcomments(commentsData)
        }
    }
  return (<div>
    <div className='w-full mx-auto bg-white shadow-md rounded-lg my-4 p-4'>
        <h2 className='text-2xl font-bold text-grey-800 mb-4'>
            {(postData||{}).title}
        </h2>
        <p className='text-gray-500 text-base mb-4'>{(postData||{}).body} </p>
        {comments && comments.map(com => {
                    return (
                        <Comments commentData={com} />
                    )
                })}


        
        
        

    </div>
    </div>
  )
}
