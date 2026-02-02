import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/side_bar'
import Home from './components/home'
import Signin from './signin'
import Discussion from './components/discussion'
import NoteForum from './components/note_forum'
import Search from './components/search'
import Following from './components/following'
import MyNotes from './components/my_notes'
import CreateNote from './components/create_note'
import Bookmarks from './components/bookmarks'
import Profile from './components/profile'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/home"
          element={<div className="flex min-h-screen"><Sidebar /><Home /></div>} />
        <Route
          path="/discussion"
          element={<div className="flex min-h-screen"><Sidebar /><Discussion /></div>} />
        <Route
          path="/note_forum"
          element={<div className="flex min-h-screen"><Sidebar /><NoteForum /></div>} />
        <Route
          path="/search"
          element={<div className="flex min-h-screen"><Sidebar /><Search /></div>} />
        <Route
          path="/following"
          element={<div className="flex min-h-screen"><Sidebar /><Following /></div>} />
        <Route
          path="/my_notes"
          element={<div className="flex min-h-screen"><Sidebar /><MyNotes /></div>} />
        <Route
          path="/create_note"
          element={<div className="flex min-h-screen"><Sidebar /><CreateNote /></div>} />
        <Route
          path="/bookmarks"
          element={<div className="flex min-h-screen"><Sidebar /><Bookmarks /></div>} />
        <Route
          path="/profile"
          element={<div className="flex min-h-screen"><Sidebar /><Profile /></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App