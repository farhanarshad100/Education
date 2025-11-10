import React, { useEffect, useState } from "react";

const  = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // ✅ Fetch users (GET)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // ✅ Delete user
  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  // ✅ Start editing user
  const handleEdit = (user) => {
    setEditUser(user);
  };

  // ✅ Update user (PUT)
  const handleUpdate = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${editUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editUser),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(
          users.map((user) => (user.id === editUser.id ? data : user))
        );
        setEditUser(null);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 User Dashboard</h2>

      {/* Edit Form */}
      {editUser && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Edit User</h3>
          <input
            type="text"
            value={editUser.name}
            onChange={(e) =>
              setEditUser({ ...editUser, name: e.target.value })
            }
            placeholder="Name"
          />
          <input
            type="email"
            value={editUser.email}
            onChange={(e) =>
              setEditUser({ ...editUser, email: e.target.value })
            }
            placeholder="Email"
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      {/* Users Table */}
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#3b82f6", color: "white" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Work Time</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{Math.floor(Math.random() * 8) + 1} hrs</td>
              <td>
                <button
                  style={{ background: "#10b981", color: "white", marginRight: "10px" }}
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  style={{ background: "#ef4444", color: "white" }}
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ;
