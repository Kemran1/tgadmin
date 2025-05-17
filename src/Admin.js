import React from 'react';
import './Admin.css';
import AdminTasks from './AdminTasks';

function Admin() {
  return (
    <div className="admin-panel">
      <h1>Да</h1>
      <AdminTasks />
    </div>
  );
}

export default Admin;
