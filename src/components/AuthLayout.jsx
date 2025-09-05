import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children,authenication = true}) {
    // this is for protection of the route
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)


    useEffect(()=>{
        if(authenication && (authStatus !== authenication) ){
            navigate('/login')
        }
        else if(!authenication && (authStatus !== authenication)){
            navigate('/')
        }
        setLoader(false)
    },[authStatus,navigate,authenication])




  return (
    loader ? <h1>Loading</h1> : <>{children}</>
  )
}