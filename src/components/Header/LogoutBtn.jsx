import React from 'react'
import { useDispatch } from "react-redux"; 


function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandeler = () =>{
    authservice.logout()
        .then(() =>{
        dispatch(logout())
    })
    .catch((error) => console.log('could not logout the user',error))
    }

  return (
    <button onClick={logoutHandeler} className='inline-bock hover:bg-blue-100 px-6 py-2 rounded-full duration-200'>
        Logout</button>
  )
}

export default LogoutBtn