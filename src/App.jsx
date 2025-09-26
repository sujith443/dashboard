import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import { createContext } from 'react'

// Import Components
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

// Import Pages
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Users from './pages/Users'
import Products from './pages/Products'
import PracticeSession from './pages/PracticeSession'
import Settings from './pages/Settings'

export const UserContext = createContext()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage/>
            )
          } 
        />
        
        <Route 
          path="/" 
          element={
            <ProtectedRoute >
              <div className="dashboard-container">
                <div className="row g-0">
                  <Sidebar onLogout={() => setIsLoggedIn(false)} />
                  <main className="col-md-9 col-lg-10 main-content">
                    <Header />
                    <div className="content-area">
                      <Dashboard />
                    </div>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/analytics" 
          element={
            <ProtectedRoute >
              <div className="dashboard-container">
                <div className="row g-0">
                  <Sidebar onLogout={() => setIsLoggedIn(false)} />
                  <main className="col-md-9 col-lg-10 main-content">
                    <Header />
                    <div className="content-area">
                      <Analytics />
                    </div>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/users" 
          element={
            <ProtectedRoute >
              <div className="dashboard-container">
                <div className="row g-0">
                  <Sidebar onLogout={() => setIsLoggedIn(false)} />
                  <main className="col-md-9 col-lg-10 main-content">
                    <Header />
                    <div className="content-area">
                      <Users />
                    </div>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/products" 
          element={
            <ProtectedRoute>
              <div className="dashboard-container">
                <div className="row g-0">
                  <Sidebar onLogout={() => setIsLoggedIn(false)} />
                  <main className="col-md-9 col-lg-10 main-content">
                    <Header />
                    <div className="content-area">
                      <Products />
                    </div>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/practice" 
          element={
            <ProtectedRoute>
              <div className="dashboard-container">
                <div className="row g-0">
                  <Sidebar onLogout={() => setIsLoggedIn(false)} />
                  <main className="col-md-9 col-lg-10 main-content">
                    <Header />
                    <div className="content-area">
                      <PracticeSession />
                    </div>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/settings" 
          element={
            <ProtectedRoute >
              <div className="dashboard-container">
                <div className="row g-0">
                  <Sidebar onLogout={() => setIsLoggedIn(false)} />
                  <main className="col-md-9 col-lg-10 main-content">
                    <Header />
                    <div className="content-area">
                      <Settings />
                    </div>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  )
}


export default App
