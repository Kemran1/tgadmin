import React, { useEffect } from 'react';
import { initTelegramWebApp } from '../telegram-webapp';

const TelegramAuth = ({ onAuth }) => {
    useEffect(() => {
        const tg = initTelegramWebApp();
        if (tg.initDataUnsafe.user) {
            onAuth(tg.initDataUnsafe.user);
        }
    }, []);

    return null;
};

export default TelegramAuth;
