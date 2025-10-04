import { Client, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
.setEndpoint('https://nyc.cloud.appwrite.io/v1')
.setProject(PROJECT_ID)


const databse = new Databases(client);

export const updateSearchCount = async (searchTerm, movie)=>{
    // use appwrite api to check if search term exist in data base
    try{
        const result = await databse.listDocuments(DATABASE_ID, COLLECTION_ID,[
        Query.equal('searchTerm', searchTerm)  
        ])

        if(result.documents.length >0 ){
            
        }
    }catch (error){

    }
    //if yes update count
    // else create new search term and couunt for term


}