import React, { useState } from 'react';

const TestList = ({ tests, onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(answers); }}>
      {tests.map(test => (
        <div key={test.id} className="test-item">
          <p>{test.question}</p>
          <input
            type="text"
            onChange={(e) => handleChange(test.id, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Отправить результаты</button>
    </form>
  );
};

export default TestList;
