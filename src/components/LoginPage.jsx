import { useState } from 'react'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (loginData.email && loginData.password) {
      onLogin(true)
    }
  }

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="container-fluid h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-card">
              <div className="login-header text-center mb-4">
                <div className="login-logo">
                  <MdDashboard size={50} className="text-primary" />
                </div>
                <h2 className="login-title">Welcome Back</h2>
                <p className="login-subtitle">Sign in to your dashboard</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaEnvelope className="text-muted" />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock className="text-muted" />
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary w-100 login-btn">
                  Sign In
                </button>
              </form>
              
              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none">Forgot password?</a>
              </div>
              
              <div className="login-footer mt-4 text-center">
                <small className="text-muted">
                  Demo credentials: any email and password
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage