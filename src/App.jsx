import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

// Import Components
import LoginPage from './components/LoginPage'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

// Import Pages
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Users from './pages/Users'
import Products from './pages/Products'
import PracticeSession from './pages/PracticeSession'
import Settings from './pages/Settings'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginPage onLogin={setIsLoggedIn} />
  }

  return (
    <Router>
      <div className="dashboard-container">
        <div className="row g-0">
          <Sidebar onLogout={() => setIsLoggedIn(false)} />
          <main className="col-md-9 col-lg-10 main-content">
            <Header />
            <div className="content-area">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/practice" element={<PracticeSession />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}


export default App
