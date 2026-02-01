import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './components/top_bar'
import Home from './components/home'
import Signin from './signin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Topbar /><Home /></>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App