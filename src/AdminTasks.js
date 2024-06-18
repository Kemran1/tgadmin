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
            {!message ? (
                <div className="admin-pass">
                    <button onClick={handleAdminPassClick}>Admin PASS</button>
                </div>
            ) : (
                <p>{message}</p>
            )}
            {message && (
                <button onClick={handleBackClick}>Назад</button>
            )}
        </div>
    );
};

export default AdminTasks;
