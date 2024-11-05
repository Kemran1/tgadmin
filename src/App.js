import React, { useState, useEffect } from 'react';
import Admin from './Admin';
import './App.css';

function App() {
  const [accessGranted, setAccessGranted] = useState(null); // Статус доступа
  const [userId, setUserId] = useState(null); // user_id пользователя

  useEffect(() => {
    // Проверяем наличие Telegram Mini App и инициализируем
    if (window.Telegram && window.Telegram.WebApp) {
      const telegramUser = window.Telegram.WebApp.initDataUnsafe.user;
      if (telegramUser) {
        setUserId(telegramUser.id); // Получаем user_id из Telegram
      }
    }
  }, []);

  useEffect(() => {
    // Проверка доступа при наличии userId
    if (userId) {
      fetch(`http://localhost:5000/?user_id=${userId}`)
        .then((response) => response.text())
        .then((text) => {
          if (text === "Доступ разрешен") {
            setAccessGranted(true);
          } else {
            setAccessGranted(false);
          }
        })
        .catch((error) => {
          console.error('Ошибка:', error);
          setAccessGranted(false);
        });
    }
  }, [userId]);

  // Пока доступ не проверен
  if (accessGranted === null) {
    return <p>Проверка доступа...</p>;
  }

  // Рендер в зависимости от статуса доступа
  return (
    <div className="App">
      {accessGranted ? (
        <Admin /> // Отображение панели администратора, если доступ разрешен
      ) : (
        <h1>Доступ запрещен</h1> // Сообщение об отказе в доступе
      )}
    </div>
  );
}

export default App;
