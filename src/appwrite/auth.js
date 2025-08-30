// this is a service which we are creating like 
// this service is for authentication or auth 

import { ThermometerSnowflake } from "lucide-react";
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

// one way is creating a class an then exporting it 
// then to use the functions inside this class we have to make a object of this class to access functions of this class

export class AuthService {
    clinet = new Client(); // this clinet is an object of the class Clinet
    account;

    constructor(){
        this.clinet
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.clinet);
    }


// this is create an account of the user
    async createAccount ({email,password,name}){
        try {
            const UserAccount = await this.account.create(ID.unique(),email, password,name)

            if(UserAccount){
                //  if useracoount is there then call a login method 
                return this.login(email,password);
            }
            else{
                return UserAccount;
            }
        }
        catch (error) {
            throw error;
        }
    }

// this is to login the user who created an account
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }
        catch(error){
            throw(error);
        }
       
    }

// this is when if the user lands to home page then he must know if he is logged in 
    async getCurrentUser(){
        try{
            const user = await this.account.get();
            // if this dont get any user then it will return null

            // this is also a way to do this 
            // if(user){
            //     return user;
            // }
            // else{
            //     return null;
            // }
            
        }
        catch(error){
            throw error;
        }

        return null;
        // if there is some problem in try catch then this will return null
    }


    async logout(){
        try {
            await this.account.deleteSessions()
            // await this.account.deleteSesssion('current')
        } catch (error) {
            throw error;
            
        }
    }
}

const authservice = new AuthService(); 
// this authservice is object of the class AuthService

export default authservice;

