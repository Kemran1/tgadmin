import React, { useState } from 'react';
import { sendToTelegram } from './telegram';

const TEST_QUESTIONS = {
  '1': [ // Вопросы для уровня 1
    {
      question: "Что делать при DDOS-атаке?",
      options: ["Игнорировать", "Блокировать IP", "Выключить сервер"],
      correct: 1
    }
  ],
  '2': [ // Вопросы для уровня 2
    {
      question: "Как проверить логи бота?",
      options: ["Через BotFather", "В панели хостинга", "Запросить у разработчика"],
      correct: 1
    }
  ]
};

export default function AdminTasks({ user, adminLevel }) {
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = () => {
    const questions = TEST_QUESTIONS[adminLevel] || [];
    const score = answers.filter((ans, i) => ans === questions[i]?.correct).length;
    
    sendToTelegram({
      userId: user.id,
      adminLevel,
      testResults: `${score}/${questions.length}`,
      username: user.username
    });
    
    setIsCompleted(true);
  };

  if (!TEST_QUESTIONS[adminLevel]) {
    return <div>Нет теста для вашего уровня ({adminLevel})</div>;
  }

  return (
    <div className="admin-test">
      <h2>Тест для администратора (Уровень {adminLevel})</h2>
      
      {isCompleted ? (
        <p>Результаты отправлены!</p>
      ) : (
        <>
          {TEST_QUESTIONS[adminLevel].map((q, idx) => (
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
          ))}
          <button onClick={handleSubmit}>Отправить</button>
        </>
      )}
    </div>
  );
}
