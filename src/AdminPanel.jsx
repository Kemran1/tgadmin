import React, { useState } from 'react';
import { sendDataToBot } from '../telegram-webapp';
import TestList from './TestList';

const AdminPanel = ({ user }) => {
  const [tests, setTests] = useState([
    { id: 1, question: "Что такое React?", answer: "Библиотека JavaScript" },
    { id: 2, question: "Как работает Telegram WebApp?", answer: "Через iframe в клиенте Telegram" }
  ]);

  const handleSubmit = (answers) => {
    sendDataToBot({
      userId: user.id,
      testResults: answers
    });
  };

  return (
    <div className="admin-panel">
      <h1>Админ-тест для {user.first_name}</h1>
      <TestList tests={tests} onSubmit={handleSubmit} />
    </div>
  );
};

export default AdminPanel;
