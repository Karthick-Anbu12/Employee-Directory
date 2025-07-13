import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header';
import { UserProvider } from './components/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Empform from './components/Empform';
import Editemp from './components/Editemp';

function App() {
  return (
    <UserProvider>
      {/* Route are used to handle routes in the website */}
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Header/>}></Route>
        {/* Route to add an employee */}
        <Route path='/addemployee' element={<Empform/>}/>
        {/* Route to edit an existing employee */}
        <Route path='/editemployee/:id' element={<Editemp/>}/>
      </Routes>
      </BrowserRouter>
    </UserProvider>


  )
}

export default App
