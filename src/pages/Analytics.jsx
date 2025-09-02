import { FaChartBar } from 'react-icons/fa'
import { MdAnalytics } from 'react-icons/md'
import { BiStats } from 'react-icons/bi'

function Analytics() {
  return (
    <div className="card modern-card">
      <div className="card-header border-0">
        <h5 className="card-title mb-0">
          <MdAnalytics className="me-2" />
          Analytics Overview
        </h5>
      </div>
      <div className="card-body">
        <p>Analytics dashboard with detailed reports and insights.</p>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="chart-placeholder">
              <FaChartBar size={48} className="text-muted mb-3" />
              <h6>Monthly Sales Chart</h6>
              <p className="text-muted">Sales data visualization</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="chart-placeholder">
              <BiStats size={48} className="text-muted mb-3" />
              <h6>User Growth Chart</h6>
              <p className="text-muted">User analytics data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics