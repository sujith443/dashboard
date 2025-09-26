import { FaUsers, FaUser, FaFileExcel } from "react-icons/fa";
import * as XLSX from "xlsx";

function Users() {
  // ✅ Dummy user data
  const userData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Pending" }
  ];

  // ✅ Export data to Excel file
  const exportToExcel = () => {
    // 1. Create a new workbook
    const workbook = XLSX.utils.book_new();

    // 2. Convert user data into a clean export format
    const exportData = userData.map(user => ({
      "User ID": user.id,
      "Name": user.name,
      "Email": user.email,
      "Role": user.role,
      "Status": user.status
    }));
    console.log(exportData);
    

    // 3. Create a sheet from JSON data
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // 4. Adjust column widths for better readability
    worksheet["!cols"] = [
      { wch: 10 }, // ID column
      { wch: 20 }, // Name
      { wch: 25 }, // Email
      { wch: 15 }, // Role
      { wch: 15 }  // Status
    ];

    // 5. Append worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // 6. Generate file name with current date
    const currentDate = new Date().toISOString().split("T")[0];
    const fileName = `users_export_${currentDate}.xlsx`;

    // 7. Download Excel file
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="card modern-card">
      {/* Header */}
      <div className="card-header border-0">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            <FaUsers className="me-2" />
            User Management
          </h5>
          <div className="d-flex gap-2">
            {/* Excel Export Button */}
            <button className="btn btn-success" onClick={exportToExcel}>
              <FaFileExcel className="me-2" />
              Export to Excel
            </button>
            {/* Add User Button */}
            <button className="btn btn-primary">
              <FaUser className="me-2" />
              Add User
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
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
              {userData.map(user => (
                <tr key={user.id}>
                  {/* User + Avatar */}
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={`https://via.placeholder.com/32x32/007bff/ffffff?text=${user.name
                          .split(" ")
                          .map(n => n[0])
                          .join("")}`}
                        className="rounded-circle me-3"
                        alt={user.name}
                      />
                      {user.name}
                    </div>
                  </td>

                  {/* Other fields */}
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span
                      className={`badge ${
                        user.status === "Active" ? "bg-success" : "bg-warning"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
