import React, { useState } from 'react';
import './AdminTasks.css';

const AdminTasks = ({ handleBackClick }) => {
    const [message, setMessage] = useState('');

    const handleAdminPassClick = () => {
        setMessage('В разработке');
    };

    return (
        <div className="admin-tasks-section">
            <h1>Админ задания</h1>
            <p>В РАЗРАБОТКЕ</p>

        </div>
    );
};

export default AdminTasks;
