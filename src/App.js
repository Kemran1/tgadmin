// src/App.js
import React, { useState, useEffect } from 'react';
import { checkAccess } from './googleSheetsAPI';
import './App.css';

const App = () => {
    const [accessGranted, setAccessGranted] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTelegramId = async () => {
            try {
                // Получение данных о пользователе с помощью Telegram Mini Apps
                const userId = window.Telegram.WebApp.initDataUnsafe.user.id;
                const access = await checkAccess(userId);
                setAccessGranted(access);
            } catch (error) {
                console.error('Error fetching Telegram ID:', error);
                setAccessGranted(false);
            } finally {
                setLoading(false);
            }
        };

        fetchTelegramId();
    }, []);

    return (
        <div className="App">
            <h1>Проверка доступа</h1>
            {loading ? (
                <p>Загрузка...</p>
            ) : accessGranted !== null && (
                <div>
                    {accessGranted ? (
                        <p>Доступ разрешен!</p>
                    ) : (
                        <p>Доступ запрещен.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
