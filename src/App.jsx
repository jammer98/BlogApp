import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux';
import authservice from "./appwrite/auth";
import { login,logout } from "./store/authSlice";
import Footer from "./components/Footer/Footer";

function App() {

    const [loading, setLoading] = useState(true);
    // laod is true means laoding screen is on 

    const dispatch = useDispatch()

    useEffect(()=>{
      authservice.getCurrentUser()
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

      .catch(error => console.error('error in getting th user form the database',error))
      // .catch is needed here as bcz we have not handled error in our getcurrentuser if we had done there there was no need foe this 

      .finally(() =>{
        setLoading(false); 
      })
      
    },[])

    

    


  
 if(loading){
    // this means if loading is true then we have to show the loading symbol 
    <div>loading screen</div>
 }
 else{
    <div className="flex flex-row flex-wrap max-w-2xs">
      <div>
        <Headers/>
        <main>
          
        </main>
        <Footer/>
      </div>
      </div>

 }
}

export default App
