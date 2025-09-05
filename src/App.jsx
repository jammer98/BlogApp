import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux';
import authservice from "./appwrite/auth";
import { login,logout } from "./store/authSlice";
import  {Header}  from "./components";
import {Footer} from'./components';
import {Outlet} from 'react-router-dom'

function App() {

    // const [loading, setLoading] = useState(true);
    // laod is true means laoding screen is on 

    const dispatch = useDispatch()

    useEffect(()=>{
      authservice.login() // this function returns a promise with a userData object
      .then((UserData) =>{
        if(UserData){
          dispatch(login({UserData}))
          // this dispatches the the userdata we get from the getcurrentuser()
          // our store have a authSlice and inside authSlice we have login and logout
          // login takes user data from the getcurrent user and make him login and updates the initial states
        }
        else{
          dispatch(logout()) // logout dont need any actions (values) just need to update the initial state
        }
      }) 
      // .catch(error => console.error('No users available ',error))
      // .catch is needed here as bcz we have not handled error in our getcurrentuser if we had done there there was no need foe this 
      .finally(() =>{
        alert("finnaly is running ")
        setLoading(false); 
      })
      
    },[])

     return(
    <div className='flex flex-wrap content-between bg-gray-400 min-h-screen'>
      <div className='block w-full'>

        <div>
          <h2>testing Header</h2>
            <Header />
        </div>
        
        <main>
          <div>
          <h2>testing Outlet</h2>
             <Outlet />
        </div>
        </main>

         <div>
          <h2>testing Footer</h2>
            <Footer />
        </div>

      </div>
    </div>
    )
  // ) : <div className="bg-sky-300 text-3xl text-center">
  //   loading screen
  // </div>

// if(loading){
//     // this means if loading is true then we have to show the loading symbol 
//     return(
//     <div className="bg-sky-300 text-center cd">loading screen</div>
//     )
//  }
// else{
//   return(
//     <div className="flex flex-row flex-wrap bg-red-300 max-w-2xs">
//       <div>
//         <Header/>
//         <main>
//          <Outlet/>
//         </main>
//         <Footer/>
//       </div>
//       </div>
//   )
//  }
}

export default App
