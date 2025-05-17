import React from 'react';
import './AdminTasks.css';

const AdminTasks = () => {
  return (
    <div className="admin-tasks-section">
      <h1>Админ задания</h1>
      <p>В РАЗРАБОТКЕ</p>
      <div className="tasks-list">
        {/* Пример задания */}
        <div className="task">
          <h3>Тестовая задача #1</h3>
          <button>Редактировать</button>
        </div>
      </div>
    </div>
  );
};

export default AdminTasks;
