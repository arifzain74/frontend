import React from 'react'
import Add from './components/Add'
import AddUser from './components/AddUser'
import Login from './components/Login'
import Get from './components/Get'
import Update from './components/Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
      <Add/>
      <AddUser/>
      <Get/>
      <Update/>
    </>
  )
}

export default App
