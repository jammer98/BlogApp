const config = {
    appwriteURL : String(import.meta.VITE_APPWRITE_URL),
    appwriteProjectID : String(import.meta.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID : String(import.meta.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID : String(import.meta.VITE_APPWRITE_BUCKET_ID)
}

export default config;


// this is the way to check the data via vite and the appwrite 