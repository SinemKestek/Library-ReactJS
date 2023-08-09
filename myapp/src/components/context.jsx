import React,{useState,useContext,useEffect} from "react";
import { useCallback } from "react";

const URL= "https://openlibrary.org/search.json?title=";
const AppContext=React.createContext();
const AppProvider = ({children})=>{
    const [books,setBooks]=useState([]);
    const [searchTerm,setSearchTerm]=useState("the lost world");
    const [loading,setLoading]=useState(true);
    const [resultTitle,setResultTitle]=useState("");

    const fetchBooks=useCallback(async()=>{
        setLoading(true);
        try{
            const response=await fetch(`${URL}${searchTerm}`);
            const data =await response.json();
            // console.log(data)
            const {docs}=data;
        // console.log(docs)   
       if(docs){
        const newBooks=docs.slice(0,20).map((bookSingle)=>{
     const {key, author_name,cover_i,edition_count,title}=bookSingle
     return {
        id:key,
        author:author_name,
        cover_id:cover_i,
        edition_count:edition_count,
       title:title
     }
        })
        setBooks(newBooks);
        if(newBooks.lenght<1){
            setResultTitle("No result!")
        
        }
      
       }
       else{
        setBooks([]);
        setResultTitle("No search Result Found!")
       }
       setLoading(false)
    
    }
        catch(error){
          
            setLoading(false);
        }
    },[searchTerm])

    useEffect(()=>{
        fetchBooks();
    },[searchTerm,fetchBooks]);



 return(
    <AppContext.Provider value={{
        loading,books,setSearchTerm,resultTitle,setResultTitle,
    }}>
        {children}
    </AppContext.Provider>
 )

}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export { AppContext,AppProvider
};