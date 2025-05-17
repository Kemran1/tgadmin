const tg = window.Telegram.WebApp;

export const initTelegram = () => {
  tg.expand();
  return tg;
};

export const sendToTelegram = (data) => {
  tg.sendData(JSON.stringify(data));
  tg.close();
};
