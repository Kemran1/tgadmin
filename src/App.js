import React, { useState } from 'react';
import { initTelegramWebApp, isAdmin } from './telegram-webapp';
import AdminTasks from './AdminTasks';
import Unauthorized from './components/Unauthorized';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    const tg = initTelegramWebApp();
    if (tg.initDataUnsafe.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="App">
      {user ? (
        isAdmin(user.id) ? (
          <AdminTasks />
        ) : (
          <Unauthorized />
        )
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
}

export default App;
