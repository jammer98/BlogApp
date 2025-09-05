import React from 'react'
import { useEffect,useState } from 'react'
import {Container, PostForm } from '../components'
import service from '../appwrite/configuration'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {

    const [post,setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
                else{
                    navigate('/')
                }
            })
        }

    },[navigate,slug])


  return post ? (<div className='py-8'>
    <Container>
        <PostForm post={posts}/>
    </Container>
  </div>) : null

}

export default EditPost