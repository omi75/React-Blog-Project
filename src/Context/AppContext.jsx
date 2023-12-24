import React, { createContext, useState } from 'react'
import { baseUrl } from '../baseUrl.js';

// step 1:
export const AppContext=createContext();

export default function AppContextProvider({children}) 
{
    const [loading, setLoading]=useState(false);
    const [posts, setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPage, setTotalPage]=useState(null);
    
    // data fetching

    const fetchBlobData=async(page=1)=>{
        try{
            // api calling
            setLoading(true);
            let url=`${baseUrl}?page=${page}`;
            const res=await fetch(url);
            const data=await res.json();

            console.log(data);
            // providing data to state variables
            setPage(data.page);
            setTotalPage(data.totalPages)
            setPosts(data.posts)
        }
        catch(err)
        {
            console.log('Error Raise' `${err}`)
            setPage(1)
            setPosts([])
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handlePageChange(page)
    {
        setPage(page);
        fetchBlobData(page);
    }

    const value={
        page,setPage,
        loading,setLoading,
        posts,setPosts,
        totalPage,setTotalPage,
        handlePageChange,fetchBlobData
    }
    

    // step 2: provide
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

