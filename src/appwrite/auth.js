// this is a service which we are creating like 
// this service is for authentication or auth 

import config from "../config/config";
import { Client, Account, ID } from "appwrite";

// one way is creating a class an then exporting it 
// then to use the functions inside this class we have to make a object of this class to access functions of this class

export class AuthService {
    client = new Client(); // this clinet is an object of the class Clinet
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.client);

        // this.something is used for the instance which we are going to use inside the class 
        // not using this can cause the variable to be lost in the class this is used to get the variable 
    }


// this is create an account of the user
    async createAccount ({email,password,name}){  // we will get these parameters from the user and we use the deconstructed version of this 
        try {
            const UserAccount = await this.account.create(ID.unique(),email, password,name);
            // this .create is function defined in the account class which we are importing from the account class

            if(UserAccount){
                //  if useracoount is there then call a login method 
                return this.login(email,password);
            }
            else{
                return UserAccount;
            }
        }
        catch (error) {
            console.log("appwrite auth sevice :: createAccount :: error",error);
        }
    }

// this is to login the user who created an account
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }
        catch(error){
            console.log("appwrite auth sevice :: login :: error",error);
        }
       
    }

// this is when if the user lands to home page then he must know if he is logged in 
  async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
            // await this.account.deleteSesssion('current')
        } catch (error) {
           console.log("appwrite auth sevice :: logout :: error",error);
            
        }
    }
}

const authservice = new AuthService(); 
// this authservice is object of the class AuthService

export default authservice;

