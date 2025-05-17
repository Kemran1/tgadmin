import React, { useState, useEffect } from 'react';
import { initTelegram } from './telegram';
import { checkAdminRights } from './googleSheets';
import AdminTasks from './AdminTasks';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const tg = initTelegram();
    if (tg.initDataUnsafe.user) {
      const tgUser = tg.initDataUnsafe.user;
      setUser(tgUser);
      
      checkAdminRights(tgUser.id).then(data => {
        if (data) setAdminData({ level: data[1], name: data[2] });
      });
    }
  }, []);

  return (
    <div className="App">
      {adminData ? (
        <AdminTasks user={user} adminLevel={adminData.level} />
      ) : (
        <div className="access-denied">
          <h1>Доступ запрещён</h1>
          <p>Ваш ID: {user?.id || 'не определён'}</p>
        </div>
      )}
    </div>
  );
}

export default App;
