import config from "../config/config";
import { Client, ID ,Databases ,Storage ,Query } from "appwrite";

export class Service{
    clinet = new Client();
    databases;
    bucket;

    constructor(){
        this.clinet
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
            this.databases = new Databases(this.clinet);
            this.bucket = new Storage(this.clinet);
    }

    async CreatePost({title ,slug ,content, featuredImage ,status ,userId}){ // this function takes these parameters ,slug is something which gets in the url 
        // like if a title by the user is "blog for react" then its slug is "blog-for-react"
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId,config.appwriteCollectionID,slug,{title,content,featuredImage,status,userId})
            // this take the following paramters like db id and collection id and inside {the data or the attributes we have mentioned }
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title ,content, featuredImage ,status}){
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId,config.appwriteCollectionID,slug,{title,content,featuredImage,status}) 
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId,config.appwriteCollectionID,slug)
            return true;
        } catch (error) {
            throw error;
            return false;

        }
    }

    async getPost(slug){ // get single post of the slug mentioned 
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId,config.appwriteCollectionID,slug)
        } catch (error) {
            throw error;
            return false;
        }

    }

    async getPosts(queries = [Query.equal("status" , "active")]){ // get all the posts whoes status is active we can apply queries on the indexed attributes
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId,config.appwriteCollectionID,queries)
        } catch (error) {
            throw error;
            return false;
        }
    }

    // file upload serivces 

    async uploadFile(file){
        try {
           return await this.bucket.createFile(config.appwriteBucketID,ID.unique(),file)
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileId){ // this fileID is the id created by the upload file's unique ID and this id is passed in the feautured image in the create post at top
        try {
            return await this.bucket.deleteFile(config.appwriteBucketID,fileId)
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(config.appwriteBucketID,fileId)
    }

}

const service = new Service()
export default service;