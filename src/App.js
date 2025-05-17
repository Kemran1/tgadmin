import React, { useState, useEffect } from 'react';
import { initTelegram } from './telegram';
import { checkAdminAccess } from './googleSheets';
import AdminTasks from './AdminTasks';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [access, setAccess] = useState({ loading: true, hasAccess: false });

  useEffect(() => {
    const tg = initTelegram();
    if (tg.initDataUnsafe.user) {
      const tgUser = tg.initDataUnsafe.user;
      setUser(tgUser);
      
      checkAdminAccess(tgUser.id).then(result => {
        setAccess({ ...result, loading: false });
      });
    }
  }, []);

  if (access.loading) return <div>Проверка доступа...</div>;
  
  return (
    <div className="app">
      {access.hasAccess ? (
        <AdminTasks user={user} adminLevel={access.level} />
      ) : (
        <div className="access-denied">
          <h1>Доступ запрещён</h1>
          <p>ID {user?.id} не найден в списке администраторов.</p>
        </div>
      )}
    </div>
  );
}

export default App;
