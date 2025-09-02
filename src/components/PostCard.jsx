import React from 'react'
import service from "../appwrite/configuration"
import { Link } from 'react-router-dom'

function PostCard({$id,title,fetauredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='bg-gray-100 py-4 rounded-xl w-full'>
            <div className='justify-center mb-4 w-full'>
                <img src={service.getFilePreview(fetauredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='font-bold text-xl'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard