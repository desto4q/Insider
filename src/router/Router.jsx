import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Imageid from '../pages/Imageid'
import Header from '../components/Header'

function Router() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path='/:id' element={<Imageid/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router