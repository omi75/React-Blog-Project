import React, { useContext,useEffect } from 'react'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import "./App.css";
import { AppContext } from './Context/AppContext';

function App() {
  const {fetchBlobData}=useContext(AppContext)

  useEffect(()=>
  {
    fetchBlobData()
  },[])
  
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App