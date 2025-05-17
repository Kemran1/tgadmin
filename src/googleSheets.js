import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = '1KTQhM5MMkhhCBLD49QYL24nyOpBeyEgIwVjfRvhZNiY';
const WORKSHEET_NAME = 'adm';

export const checkAdminAccess = async (userId) => {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[WORKSHEET_NAME];
    const rows = await sheet.getRows();
    
    // Находим индексы столбцов
    const headers = sheet.headerValues;
    const telegramCol = headers.indexOf('Телеграм');
    const levelCol = headers.indexOf('Уровень');
    
    if (telegramCol === -1) throw new Error('Столбец "Телеграм" не найден');
    
    // Ищем пользователя
    const userRow = rows.find(row => row._rawData[telegramCol] === userId.toString());
    
    if (!userRow) return { hasAccess: false };
    
    return {
      hasAccess: true,
      level: userRow._rawData[levelCol] || '1', // Уровень из столбца "Уровень"
      name: userRow._rawData[headers.indexOf('Имя')] || 'Админ' // Опционально
    };
    
  } catch (error) {
    console.error('Ошибка доступа к Google Sheets:', error);
    return { hasAccess: false };
  }
};
