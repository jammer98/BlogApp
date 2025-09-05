import React from 'react'
import { useState,useEffect } from 'react'
import service from '../appwrite/configuration'
import { Container, PostCard } from '../components'



function Allposts() {

    const [posts,setPosts] = useState([]) 

    // useEffect(() =>{
    //     service.getPosts([]).then((posts) =>{
    //         if(posts){
    //             setPosts(posts.documents)
    //         }
    //     })
    // },[])

  return (
    <div className='py-8 w-full'>
        <Container>
            <div className='flex-wrap fle'>
                {posts.map(post =>(
                    <div key={post.$Id} className='p-2 w-full'>
                        <PostCard post={posts}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Allposts