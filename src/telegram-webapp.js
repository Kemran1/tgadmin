const tg = window.Telegram.WebApp;

export const initTelegramWebApp = () => {
  tg.expand();
  return tg;
};

export const isAdmin = (userId) => {
  const ADMIN_IDS = [123456789, 987654321]; // Ваши ID админов
  return ADMIN_IDS.includes(userId);
};
