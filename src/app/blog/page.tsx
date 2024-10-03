"use client"
import PostCard from '@/components/postCards/page';
import Link from 'next/link';

import { useEffect, useState } from 'react'

export default function Blog() {
  const [PostData,setpostData]= useState([])

  useEffect(()=>{
    getAllPosts()
},[])

  
  const getAllPosts=async()=>{

const response = await fetch("https://jsonplaceholder.typicode.com/posts")

const Data = await response.json()
setpostData(Data);

  }

  return (
    <div className='flex flex-wrap justify-center'>
    {PostData.map((eachpost:any) => {

      return  (

      <Link href={`/blog/${eachpost.id}`}>< PostCard postData = {eachpost}/> </Link>
      
      )
      
      })}
      
    </div>
  )
};

