import { FaUsers, FaUser } from 'react-icons/fa'

function Users() {
  return (
    <div className="card modern-card">
      <div className="card-header border-0">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            <FaUsers className="me-2" />
            User Management
          </h5>
          <button className="btn btn-primary">
            <FaUser className="me-2" />
            Add User
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table modern-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
                { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
                { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Pending" }
              ].map(user => (
                <tr key={user.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img 
                        src={`https://via.placeholder.com/32x32/007bff/ffffff?text=${user.name.split(' ').map(n => n[0]).join('')}`} 
                        className="rounded-circle me-3" 
                        alt={user.name} 
                      />
                      {user.name}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users