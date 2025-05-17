import React, { useState } from 'react';
import { sendToTelegram } from './telegram';
import './AdminTasks.css';

const TEST_QUESTIONS = [
  {
    question: "Что делать при DDOS-атаке?",
    options: ["Игнорировать", "Блокировать IP", "Выключить сервер"],
    correct: 1
  },
  {
    question: "Как проверить логи бота?",
    options: ["Через BotFather", "В панели хостинга", "Запросить у разработчика"],
    correct: 1
  }
];

const AdminTasks = ({ user, adminLevel }) => {
  const [answers, setAnswers] = useState([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const handleSubmit = () => {
    const score = answers.filter((ans, i) => ans === TEST_QUESTIONS[i].correct).length;
    const result = {
      userId: user.id,
      username: user.username,
      adminLevel,
      testScore: `${score}/${TEST_QUESTIONS.length}`
    };
    
    sendToTelegram(result);
    setIsTestCompleted(true);
  };

  return (
    <div className="admin-tasks">
      <h1>Тест для админа (Уровень {adminLevel})</h1>
      
      {isTestCompleted ? (
        <p>Результаты отправлены!</p>
      ) : (
        TEST_QUESTIONS.map((q, idx) => (
          <div key={idx} className="question">
            <h3>{q.question}</h3>
            {q.options.map((opt, optIdx) => (
              <label key={optIdx}>
                <input
                  type="radio"
                  name={`q${idx}`}
                  onChange={() => {
                    const newAnswers = [...answers];
                    newAnswers[idx] = optIdx;
                    setAnswers(newAnswers);
                  }}
                />
                {opt}
              </label>
            ))}
          </div>
        ))
      )}

      {!isTestCompleted && (
        <button onClick={handleSubmit}>Отправить результаты</button>
      )}
    </div>
  );
};

export default AdminTasks;
