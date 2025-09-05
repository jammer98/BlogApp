import React from 'react'
import { useEffect,useState } from 'react'
import service from '../appwrite/configuration'
import {Container, PostCard, PostForm } from '../components'

function Home() {

    const [posts,setPosts] = useState([])

    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    if(posts.length === 0){
        return (
            <div className='mt-4 py-8 w-full text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='font-bold hover:text-gray-500 text-2xl'>
                                Login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else{
        <div className='py-8 w-ful'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map(post=>(
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    }
}

export default Home