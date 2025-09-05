import React, { useState } from 'react'
import authservice from '../appwrite/auth'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import { set, useForm } from 'react-hook-form'
import {Link,useNavigate} from 'react-router-dom'
import {login } from '../store/authSlice'


function SignUp() {

    const navigate = useNavigate()
    const [error,setError] = useState("")
    const dispatch = useDispatch()
    const {register,handelSubmit } = useForm()

    const create = async(data) =>{
        setError("")
        try {
            const userData = await authservice.createAccount(data)
            if(userData){
                const userData = await authservice.getCurrentUser()
                if(userData) dispatch(login(userData))
                    navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex justify-center items-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className='flex justify-center mb-2'>
            <span className='inline-block w-full max-w-[100px'>
                <logo width='100%'></logo>
            </span>
        </div>
        <h2 className='font-bold text-2xl text-center leading-tight'>
            Sign up create an account
        </h2>
        <p className='mt-2 text-black/60 text-centre text-base'>
            Already have an account
            <Link to='/login' className='font-medium text-primary hover:underline transition-all duration-200'>
            SignIn
            </Link>
        </p>
        {error && <p className='mt-8 text-red-600 text-center'>{error}</p>}
        <form onSubmit={handelSubmit(create)}>
            <div className='space-y-5'>
                <Input label="name" placeholder="enter your name "
                {...register("name",{
                    required:true,
                })}> 
                </Input>
                <Input
                    label="Email"
                    placeholder= "Enter your email"
                    type= "email"
                    {...register("email",{ required:true, validate:{matchPattern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)|| "Email must be a vaild address", }
                    })}
                />
                <Input
                    label="password :"
                    placeholder= "Enter your password"
                    {...register("password",{required : true,})}
                />
                <Button type='submit' classname='w-full'>Create Account</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default SignUp