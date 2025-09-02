import { FaCog, FaEnvelope } from 'react-icons/fa'

function Settings() {
  return (
    <div className="card modern-card">
      <div className="card-header border-0">
        <h5 className="card-title mb-0">
          <FaCog className="me-2" />
          Settings
        </h5>
      </div>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="siteName" className="form-label">Site Name</label>
                <input type="text" className="form-control modern-input" id="siteName" defaultValue="My Dashboard" />
              </div>
              <div className="mb-3">
                <label htmlFor="siteEmail" className="form-label">Site Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <input type="email" className="form-control" id="siteEmail" defaultValue="admin@dashboard.com" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="timezone" className="form-label">Timezone</label>
                <select className="form-select modern-input" id="timezone">
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                  <option>GMT</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Notifications</label>
                <div className="settings-group">
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="emailNotifs" defaultChecked />
                    <label className="form-check-label" htmlFor="emailNotifs">
                      Email Notifications
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="pushNotifs" />
                    <label className="form-check-label" htmlFor="pushNotifs">
                      Push Notifications
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="smsNotifs" defaultChecked />
                    <label className="form-check-label" htmlFor="smsNotifs">
                      SMS Notifications
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            <FaCog className="me-2" />
            Save Settings
          </button>
        </form>
      </div>
    </div>
  )
}

export default Settings