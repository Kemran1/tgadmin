import React, { useState } from 'react';
import './AdminTasks.css';
import { getNicknameByTelegramId } from './googleSheetsAPI';

const AdminTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [points, setPoints] = useState(0);
    const [level, setLevel] = useState(1);
    const [nickname, setNickname] = useState('');

    const taskList = [
        { id: 1, description: "Сделать 1000 действий за день", reward: 200 },
        { id: 2, description: "Наказать 10 нарушителей за DM", reward: 200 },
        { id: 3, description: "Ответить на 250 репортов", reward: 300 },
        { id: 4, description: "Простоять 1 пост (60 минут)", reward: 300 },
        { id: 5, description: "Выдать 20 любых наказаний", reward: 200 },
        { id: 6, description: "Ответить на 150 репортов", reward: 200 },
        { id: 7, description: "Сделать 2000 действий за день", reward: 300 },
        { id: 8, description: "Зайти в игру 5 раз", reward: 150 },
        { id: 9, description: "Общительный (общаться в админ чате)", reward: 200 },
        { id: 10, description: "Провести 5 мероприятий", reward: 200 },
        { id: 11, description: "Ответить на 350 репортов", reward: 400 },
    ];

    const handleGetTasks = () => {
        const shuffledTasks = taskList.sort(() => 0.5 - Math.random());
        setTasks(shuffledTasks.slice(0, 3));
    };

    const handleCompleteTask = (taskId) => {
        const task = tasks.find(t => t.id === taskId);
        setPoints(prevPoints => {
            const newPoints = prevPoints + task.reward;
            if (newPoints >= 1000) {
                setLevel(prevLevel => prevLevel + 1);
                return newPoints - 1000;
            }
            return newPoints;
        });
        setTasks(prevTasks => prevTasks.filter(t => t.id !== taskId));
    };

    const handleAdminPassClick = async () => {
        const telegramId = getTelegramId(); // Функция получения Telegram ID
        const nickname = await getNicknameByTelegramId(telegramId);
        setNickname(nickname || 'администратор');
    };

    return (
        <div className="admin-tasks-section">
            <h1>Админ задания</h1>
            <div className="admin-pass">
                <button onClick={handleAdminPassClick}>Admin PASS</button>
            </div>
            {nickname && <p>Здравствуйте, {nickname}!</p>}
            <div className="tasks">
                {tasks.map(task => (
                    <div key={task.id} className="task-card">
                        <p>{task.description}</p>
                        <p>Награда: {task.reward} ac</p>
                        <button onClick={() => handleCompleteTask(task.id)}>Проверить</button>
                    </div>
                ))}
            </div>
            <div className="progress">
                <h2>Уровень: {level}</h2>
                <p>Опыт: {points} / 1000</p>
            </div>
        </div>
    );
};

export default AdminTasks;
