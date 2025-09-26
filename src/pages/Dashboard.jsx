import { FaUsers, FaBox, FaDollarSign, FaShoppingCart, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { UserContext } from '../App'
import { useContext } from 'react'
function Dashboard() {
  const statsCards = [
    {
      title: "Total Users",
      value: "150",
      change: "+12%",
      changeType: "positive",
      icon: FaUsers,
      color: "primary"
    },
    {
      title: "Products",
      value: "85",
      change: "+5%",
      changeType: "positive",
      icon: FaBox,
      color: "success"
    },
    {
      title: "Revenue",
      value: "$12,500",
      change: "+23%",
      changeType: "positive",
      icon: FaDollarSign,
      color: "warning"
    },
    {
      title: "Orders",
      value: "45",
      change: "-2%",
      changeType: "negative",
      icon: FaShoppingCart,
      color: "info"
    }
  ]

  const { isLoggedIn } = useContext(UserContext)

  console.log(isLoggedIn);
  

  return (
    <div>
      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        {statsCards.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={index} className="col-md-6 col-lg-3">
              <div className={`stat-card stat-card-${stat.color}`}>
                <div className="stat-card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="stat-label">{stat.title}</p>
                      <h3 className="stat-value">{stat.value}</h3>
                      <div className={`stat-change ${stat.changeType}`}>
                        {stat.changeType === 'positive' ? <FaArrowUp /> : <FaArrowDown />}
                        <span>{stat.change}</span>
                      </div>
                    </div>
                    <div className="stat-icon">
                      <IconComponent size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="row g-4">
        {/* Recent Activity */}
        <div className="col-lg-8">
          <div className="card modern-card">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Recent Activity</h5>
                <button className="btn btn-sm btn-outline-primary">View All</button>
              </div>
            </div>
            <div className="card-body">
              <div className="activity-list">
                {[
                  { icon: FaUsers, text: "New user registration - John Doe", time: "2 hours ago", type: "user" },
                  { icon: FaBox, text: "Product added - Wireless Headphones", time: "4 hours ago", type: "product" },
                  { icon: FaShoppingCart, text: "Order completed - #12345", time: "6 hours ago", type: "order" },
                  { icon: FaUsers, text: "User updated profile - Jane Smith", time: "8 hours ago", type: "user" }
                ].map((activity, index) => {
                  const IconComponent = activity.icon
                  return (
                    <div key={index} className="activity-item">
                      <div className={`activity-icon activity-icon-${activity.type}`}>
                        <IconComponent size={14} />
                      </div>
                      <div className="activity-content">
                        <p className="activity-text">{activity.text}</p>
                        <small className="activity-time">{activity.time}</small>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="col-lg-4">
          <div className="card modern-card">
            <div className="card-header border-0">
              <h5 className="card-title mb-0">Performance</h5>
            </div>
            <div className="card-body">
              <div className="progress-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="progress-label">Sales Target</span>
                  <span className="progress-value">75%</span>
                </div>
                <div className="progress modern-progress">
                  <div className="progress-bar bg-primary" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div className="progress-item mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="progress-label">User Growth</span>
                  <span className="progress-value">60%</span>
                </div>
                <div className="progress modern-progress">
                  <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                </div>
              </div>
              
              <div className="progress-item">
                <div className="d-flex justify-content-between mb-2">
                  <span className="progress-label">Product Views</span>
                  <span className="progress-value">80%</span>
                </div>
                <div className="progress modern-progress">
                  <div className="progress-bar bg-warning" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard