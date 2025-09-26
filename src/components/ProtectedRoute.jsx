import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../App'

function ProtectedRoute({children}) {
  const { isLoggedIn } = useContext(UserContext)
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  
  return children
}

export default ProtectedRoute