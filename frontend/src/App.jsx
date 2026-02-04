import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/side_bar'
import Home_Top_bar from './components/home/home_top_bar'
import Home_page from './components/home/home_page'
import Signin from './signin'
import Discussion_page from './components/discussion/discussion_page'
import Discussion_top_bar from './components/discussion/discussion_top_bar'
import NoteForum_page from './components/note_forum/note_forum_page'
import NoteForum_top_bar from './components/note_forum/note_forum_top_bar'
import Search_page from './components/search/search_page/'
import Search_top_bar from './components/search/search_top_bar'
import Following_page from './components/following/following_page'
import Following_top_bar from './components/following/following_top_bar'
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
          element={<div className="flex min-h-screen"><Sidebar /><div className="flex flex-col flex-1"><Home_Top_bar /><Home_page /></div></div>} />
        <Route
          path="/discussion"
          element={<div className="flex min-h-screen"><Sidebar /><div className="flex flex-col flex-1"><Discussion_top_bar /><Discussion_page /></div></div>} />
        <Route
          path="/note_forum"
          element={<div className="flex min-h-screen"><Sidebar /><div className="flex flex-col flex-1"><NoteForum_top_bar /><NoteForum_page /></div></div>} />
        <Route
          path="/search"
          element={<div className="flex min-h-screen"><Sidebar /><div className="flex flex-col flex-1"><Search_top_bar /><Search_page /></div></div>} />
        <Route
          path="/following"
          element={<div className="flex min-h-screen"><Sidebar /><div className="flex flex-col flex-1"><Following_top_bar /><Following_page /></div></div>} />
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