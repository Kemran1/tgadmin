import React, { useState, useEffect } from 'react';
import { initTelegram } from './telegram';
import { checkAdminAccess } from './googleSheets';
import AdminTasks from './AdminTasks';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [accessData, setAccessData] = useState({ hasAccess: false, level: '1' });

  useEffect(() => {
    const tg = initTelegram();
    if (tg.initDataUnsafe.user) {
      const tgUser = tg.initDataUnsafe.user;
      setUser(tgUser);
      
      checkAdminAccess(tgUser.id).then(data => {
        setAccessData(data);
      });
    }
  }, []);

  return (
    <div className="App">
      {accessData.hasAccess ? (
        <AdminTasks 
          user={user} 
          adminLevel={accessData.level} 
          adminName={accessData.name}
        />
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
