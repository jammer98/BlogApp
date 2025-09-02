import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin } from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import {useForm} from "react-hook-form"
function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handelsubmit} = useForm()
    const [error,setError] = useState("")

    const login = async(data) =>{
        setError("")
        try {
            const session = await authservice.login(data)
            if(session){
                const userData = await authservice.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                    navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex justify-center items-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10`}>
        <div className='flex justify-center mb-2'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width="100%" />
            </span>
        </div>
        <h2 className='font-bold text-2xl text-center'>Sign in to your account </h2>
        <p>
            Dont have any account 
            <Link to="/signup" className='font-medium text-primary hover:underline duration-200 transtion-all'>
            SignUp
            </Link>
        </p>
        { error && <p className='mt-8 text-red-600 text-center'>{error}</p>}
        <form onSubmit={handelsubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                    label="Email"
                    placeholder= "Enter your email"
                    type= "email"
                    {...register("email",{ required:true, validate:{matchPattern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)|| "Email must be a vaild address", }
                    })}
                />
                <Input
                    label="password"
                    placeholder= "Enter your password"
                    {...register("password",{required : true,})}
                />
                <Button type='submit' classname='w-full'>SignIN</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login