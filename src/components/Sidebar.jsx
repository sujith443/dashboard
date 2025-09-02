import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaChartBar, FaUsers, FaBox, FaCog, FaSignOutAlt, FaGraduationCap } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

function Sidebar({ onLogout }) {
  const location = useLocation()

  const menuItems = [
    { id: 'dashboard', path: '/', icon: FaHome, label: 'Dashboard' },
    { id: 'analytics', path: '/analytics', icon: FaChartBar, label: 'Analytics' },
    { id: 'users', path: '/users', icon: FaUsers, label: 'Users' },
    { id: 'products', path: '/products', icon: FaBox, label: 'Products' },
    { id: 'practice', path: '/practice', icon: FaGraduationCap, label: 'Practice Session' },
    { id: 'settings', path: '/settings', icon: FaCog, label: 'Settings' }
  ]

  return (
    <nav className="col-md-3 col-lg-2 sidebar">
      <div className="sidebar-header">
        <div className="d-flex align-items-center justify-content-center py-4">
          <MdDashboard size={30} className="text-white me-2" />
          <h4 className="text-white mb-0">Dashboard</h4>
        </div>
      </div>
      
      <div className="sidebar-menu">
        <ul className="nav flex-column">
          {menuItems.map(item => {
            const IconComponent = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <li key={item.id} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <IconComponent className="me-3" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
        
        <div className="sidebar-footer mt-auto">
          <button className="nav-link logout-btn" onClick={onLogout}>
            <FaSignOutAlt className="me-3" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar