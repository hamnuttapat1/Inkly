import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/side_bar'
import Home from './components/home'
import Signin from './signin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<div className="flex min-h-screen"><Sidebar /><Home /></div>} />
        <Route
          path="/home"
          element={<div className="flex min-h-screen"><Sidebar /><Home /></div>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App