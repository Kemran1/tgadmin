// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { checkAccess } from './googleSheetsAPI';

const App = () => {
    const [telegramId, setTelegramId] = useState(null);
    const [accessGranted, setAccessGranted] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTelegramId = async () => {
            try {
                const tg = window.Telegram.WebApp;
                tg.ready();

                // Получение Telegram ID пользователя
                const userId = tg.initDataUnsafe.user.id;
                setTelegramId(userId);

                // Проверка доступа пользователя
                const access = await checkAccess(userId);
                setAccessGranted(access);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching Telegram ID:', error);
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
            ) : (
                <div>
                    <p>Ваш Telegram ID: {telegramId}</p>
                    {accessGranted !== null && (
                        <div>
                            {accessGranted ? (
                                <p>Доступ разрешен!</p>
                            ) : (
                                <p>Доступ запрещен.</p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
