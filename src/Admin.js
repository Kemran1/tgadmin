import React, { useState } from 'react';
import './Admin.css';
import AdminTasks from './AdminTasks';

const Admin = () => {
    const [content, setContent] = useState(null);

    const handleButtonClick = (component) => {
        setContent(component);
    };

    const handleBackClick = () => {
        setContent(null); // Clear content to go back to initial state
    };

    const formattedTexts = {
        'Система повышения администрации': (
            <div className="formatted-text">
                <h2 className="centered">WHITE 🤍 | Система повышения администрации</h2>
                <p className="centered">Доброго времени суток, уважаемые администраторы!</p>
                <p className="centered">Здесь вы можете ознакомиться с системой повышения администрации.</p>

                <div className="promotion-level">
                    <h3>Младший модератор &gt; Модератор (1 lvl &gt; 2 lvl)</h3>
                    <ul>
                        <li>15+ дней с момента назначения (без учета неактивных дней)</li>
                        <li>Количество репортов: 5000</li>
                        <li>Количество выполненных норм: 13+</li>
                        <li>1 обязательный пост</li>
                    </ul>
                </div>

                <div className="promotion-level">
                    <h3>Модератор &gt; Старший модератор (2 lvl &gt; 2.5 lvl)</h3>
                    <ul>
                        <li>20+ дней на должности (без учета неактивных дней)</li>
                        <li>Количество репортов: 9000</li>
                        <li>Количество выполненных норм: 17+</li>
                    </ul>
                </div>

                <div className="promotion-level">
                    <h3>Старший модератор &gt; Администратор (2.5 lvl &gt; 3 lvl)</h3>
                    <ul>
                        <li>25+ дней на должности (без учета неактивных дней)</li>
                        <li>Количество репортов: 12000</li>
                        <li>Количество выполненных норм: 23+</li>
                    </ul>
                </div>

                <div className="promotion-level">
                    <h3>Администратор &gt; Старший администратор (3 lvl &gt; 4 lvl)</h3>
                    <ul>
                        <li>35+ дней на должности (без учета неактивных дней)</li>
                        <li>Количество репортов: 18000</li>
                        <li>Количество выполненных норм: 30+</li>
                    </ul>
                </div>

                <div className="notes">
                    <h3>Примечание:</h3>
                    <ul>
                        <li>При повышении репорты обнуляются.</li>
                        <li>С действующими выговорами повышение невозможно.</li>
                        <li>Отсутствие на собрании = неснимаемый выговор (возможность снятия - присутствие на следующем собрании).</li>
                        <li>Для быстрого ориентирования в таблице, столбцы, помогающие узнать сколько осталось до повышения, отмечены красным цветом.</li>
                    </ul>
                </div>
            </div>
        ),
        'Норма администрации': (
            <div className="formatted-text">
                <h2 className="centered">WHITE 🤍 | Норма администрации</h2>
                <p className="centered">Доброго времени суток, уважаемая администрация!</p>
                <p className="centered">Здесь вы можете ознакомиться с ежедневной нормой администрации.</p>
                <p><b>Младший модератор</b><br />
                    Ответы: 200<br />
                    Онлайн: 170 минут<br />
                    1 пост
                </p>
                <p><b>Модератор</b><br />
                    Ответы: 200<br />
                    Онлайн: 160 минут<br />
                    2 мероприятия
                </p>
                <p><b>Старший модератор</b><br />
                    Ответы: 180<br />
                    Онлайн: 160 минут<br />
                    2 мероприятия
                </p>
                <p><b>Администратор/Старший администратор</b><br />
                    Ответы: 150<br />
                    Онлайн: 150 минут<br />
                    2 мероприятия (Исключение: Старший администратор/ГС/ЗГС ОПГ/ГОСС/АП)
                </p>
                <p><b>Редактор группы</b><br />
                    Ответы: 190<br />
                    Онлайн: 170 минут
                </p>
                <p><b>Следящий за ВС (Войны семей) - Должность не актуальна на сервере</b><br />
                    Ответы: ххх<br />
                    Онлайн: ххх минут
                </p>
                <p><b>Куратор форума</b><br />
                    Ответы: 160<br />
                    Онлайн: 150 минут
                </p>
                <p><b>Следящий за фракцией</b><br />
                    Ответы: 160<br />
                    Онлайн: 150 минут
                </p>
                <p><b>Следящий за хелперами</b><br />
                    Ответы: 160<br />
                    Онлайн: 150 минут
                </p>
                <p><b>Главный куратор форума | Главный редактор группы</b><br />
                    Ответы: 120<br />
                    Онлайн: 150 минут
                </p>
                <p><b>Заместитель главного куратора форума</b><br />
                    Ответы: 140<br />
                    Онлайн: 150 минут
                </p>
                <p><b>Заместители главных следящих</b><br />
                    Ответы: 70<br />
                    Онлайн: 120 минут
                </p>
                <p><b>Главные следящие</b><br />
                    Ответы: 50<br />
                    Онлайн: 120 минут
                </p>
            </div>
        ),
        'Обязанности администрации сервера': (
            <div className="formatted-text">
                <h2>WHITE 🤍 | Обязанности администрации сервера</h2>
                {/* Добавьте необходимый контент для этой кнопки */}
            </div>
        )
    };

    return (
        <div className="admin-section">
            <h1>Админ раздел</h1>
            {!content && (
                <div className="buttons">
                    <button onClick={() => handleButtonClick(formattedTexts['Система повышения администрации'])}>Система
                        повышения администрации
                    </button>
                    <button onClick={() => handleButtonClick(formattedTexts['Норма администрации'])}>Норма администрации
                    </button>
                    <button
                        onClick={() => handleButtonClick(formattedTexts['Обязанности администрации сервера'])}>Обязанности
                        администрации сервера
                    </button>
                    <button onClick={() => window.location.href = 'https://forum.blackrussia.online/'}>Официальный форум
                        BLACK RUSSIA (Игрок)
                    </button>
                    <button onClick={() => handleButtonClick(<AdminTasks handleBackClick={handleBackClick}/>)}>
                    Admin PASS
                    </button>
                </div>
            )}
            <div className="content">
                {content}
            </div>
            {content && (
                <button onClick={handleBackClick}>Назад</button>
            )}
        </div>
    );
};

export default Admin;