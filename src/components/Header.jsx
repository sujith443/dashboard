import { useLocation } from 'react-router-dom'
import { FaDownload, FaBell } from 'react-icons/fa'

function Header() {
  const location = useLocation()
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard'
      case '/analytics':
        return 'Analytics'
      case '/users':
        return 'Users'
      case '/products':
        return 'Products'
      case '/practice':
        return 'Practice Session'
      case '/settings':
        return 'Settings'
      default:
        return 'Dashboard'
    }
  }

  const getPageSubtitle = () => {
    switch (location.pathname) {
      case '/':
        return "Welcome back! Here's what's happening."
      case '/analytics':
        return 'View detailed analytics and reports.'
      case '/users':
        return 'Manage users and their permissions.'
      case '/products':
        return 'Manage your product inventory.'
      case '/practice':
        return 'Practice your React skills with this interactive session.'
      case '/settings':
        return 'Configure your application settings.'
      default:
        return "Welcome back! Here's what's happening."
    }
  }

  return (
    <header className="header-area">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 className="page-title">{getPageTitle()}</h1>
          <p className="page-subtitle text-muted">{getPageSubtitle()}</p>
        </div>
        <div className="header-actions d-flex align-items-center gap-3">
          <button className="btn btn-outline-primary">
            <FaDownload className="me-2" />
            Export
          </button>
          <div className="position-relative">
            <FaBell size={20} className="text-muted" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
            </span>
          </div>
          <div className="user-menu d-flex align-items-center">
            <img 
              src="https://via.placeholder.com/35x35/007bff/ffffff?text=JD" 
              className="rounded-circle me-2" 
              alt="User" 
            />
            <span className="fw-medium">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header