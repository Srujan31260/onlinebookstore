import React, { useState } from 'react';
// import './UserManager.css'; 

const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  const handleInputChange = (e) => {
    setNewUser(e.target.value);
  };

  const addUser = () => {
    if (newUser.trim() !== '') {
      setUsers([...users, newUser.trim()]);
      setNewUser(''); 
    }
  };

  return (
    <div className="user-manager-container">
      <h2>User Manager</h2>
      <div className="add-user-form">
        <input
          type="text"
          value={newUser}
          onChange={handleInputChange}
          placeholder="Enter new user"
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <div className="user-list">
        <h3>Users:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManager;
