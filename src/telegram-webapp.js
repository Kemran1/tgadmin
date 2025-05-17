const tg = window.Telegram.WebApp;

export const initTelegramWebApp = () => {
    tg.expand(); // Развернуть приложение на весь экран
    tg.enableClosingConfirmation(); // Подтверждение перед закрытием
    return tg;
};

export const sendDataToBot = (data) => {
    tg.sendData(JSON.stringify(data));
};