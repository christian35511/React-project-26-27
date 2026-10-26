import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFoundPage from './pages/NotFoundPage'
import StudentDetail from './pages/StudentDetail'
import UseMemoPage from './pages/UseMemoPage'
import Timer from './pages/Timer'
import StudentForm from './pages/StudentForm'
import { useMemo, useState } from "react"
import StudentSearch from './pages/StudentSearch'
import { Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeProvider'
import { EventProvider } from './context/EventContext'

import DashboardHome from './pages/Team1_Dashboard/DashboardHome'
import ClubList from './pages/Team2_Clubs/ClubList'
// FIXED: This now correctly imports the custom operational registration component you built
import RegisterForm from './pages/Team3_Registration/RegisterMain' 
import EventSchedule from './pages/Team4_Schedule/EventSchedule'
import UserProfile from './pages/Team5_Profiles/UserProfile'
import AdminPanel from './pages/Team6_Admin/AdminPanel'

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <EventProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/students/:id' element={<StudentDetail />} />
            <Route path="/UseMemoPage" element={<UseMemoPage />} />
            <Route path="/Timer" element={<Timer />} />
            <Route path="/form" element={<StudentForm />} />
            <Route path="/search" element={<StudentSearch />} />

            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/clubs" element={<ClubList />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/schedule" element={<EventSchedule />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/admin" element={<AdminPanel />} />

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>

        <div style={{ padding: '1rem', textAlign: 'center', marginBottom:'-220px' }}>
          <button className="theme-btn" onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Black' : 'Light'} Mode
          </button>
        </div>

        <Footer />
      </div>
    </EventProvider>
  )
}
