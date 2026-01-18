import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Celebratepage from './pages/Celebratepage'
import Question from './pages/Question'
import Wish from './pages/Wish'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/celebrate' element={<Celebratepage/>}/>
      <Route path='/question' element={<Question/>}/>
      <Route path='/wish' element={<Wish/>}/>
    </Routes>
    </BrowserRouter>
  )
}

