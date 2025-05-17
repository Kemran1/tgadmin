import React from 'react';
import './Admin.css';
import AdminTasks from './AdminTasks';

function Admin() {
  return (
    <div className="admin-panel">
      <h1>Telegram Bot Admin</h1>
      <AdminTasks />
    </div>
  );
}

export default Admin;
