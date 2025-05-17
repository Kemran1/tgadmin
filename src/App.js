import React, { useState } from 'react';
import TelegramAuth from './components/TelegramAuth';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <TelegramAuth onAuth={setUser} />
      ) : (
        <AdminPanel user={user} />
      )}
    </div>
  );
}

export default App;
