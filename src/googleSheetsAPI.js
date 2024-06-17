import { GoogleSpreadsheet } from 'google-spreadsheet';

// Добавьте свои данные аутентификации
const doc = new GoogleSpreadsheet('1KTQhM5MMkhhCBLD49QYL24nyOpBeyEgIwVjfRvhZNiY');

const googleCredentials = {
    type: "service_account",
    project_id: "bot-tabl",
    private_key_id: "d8bb858d23169164ab57c301561c646ef313683d",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCQbPhuCPy4ORX7\n0kC6kvQSOimMxfqKIyXhTwrGyHLWIV2e5iakmmSRbzCznbZfhbiO+wL/FbyaUTs+\nohSJQ0VC2+76/ONiMW1U2VcCL1d4DfnLeNlauSmCFJsPvnb1IjUfwoQomxTYFNu5\nCRQafq5mrWDjwDxLx4TRiq5+r8S6BiOH+BM1CD8yAjsr0553Ay6SV8OapwVFs6ty\n6Hb/KxiAzXCrkBsN39cWVEcf/T44Wdc56dXtiTWm2chZit6+/q8AfUB5/gK3noWn\nN4oyiPYv+SiEzau/8bZjqJFMbRRTCLmuc/pRt2jfKmy7uIdIfmx7M44WVe39zePi\n2lXKvTfRAgMBAAECggEAJTSdTyNrjz3NhwDkAexnieaH26cI4tspIADPwuPSiY0w\n5AVgQRkw/TJKtorTd4ooQFUzsWj1HD/+5iS066NzzUSBLRFGtn4LL0eKHZr6iof3\nKM6qF7AJnGQYihbD6GR2kQb4KsnAteWxsNpA3o5x+SuDAUj9f3wXoC98wlAfethE\n5zwdl3RTiaZXl6NnN9BiJkHk7YIcoYJGrnZH42GHLcGeCKtbso4o9XEhuO7+KNfm\nwjQS8fjIvso5JiJWNEyinvOYZvkoVKOsnMwEX22m2nm6b11hCOLR1m/weIl+DiJ6\n7iJwdUdXfbqtVVmkD1bmQptcIf60Tfnz1yUwpDk4rQKBgQDFIC663OxEgU1V5Sav\nZM79e8o+YfheQp+AndT9/9P2wyQxYtHfgPKIosZrbx1+Feyu1gQgBFAX6DiuPH7k\nPDBDFqXitYU6xc5y3qabsfsWuyw43JZ/jxtl8OH8xzQYcKonJ7sTntT5PqTu3iFj\nrha53r6gLpbzs3l+ccSeLRrw7wKBgQC7j3P+gkOhj7qAl8SufOIF5MV8Ie/WOIPm\n49xZYyc87JQ/10GCh9l3GEFXnl01k2gGA4HrYC6wLpRdqPcb4B98MJbjFrVadE6b\nNvHOgEfn2s9B6ns/ztMWs/sTlKTkLLi3bJNJmOm7p3axArXSuRiRLw9mjaYbBHBM\nnj2GGgjjPwKBgE2hM+Xw9LaxuRP3jzmJWJ6ormfMyzPLxuauwV9Z7U6DYPB1+zKq\npFi8yakrdBDgb3oW3D8Dk8smb5PmTQ5yyYrSE3fphlMz7O590l0ERV6ZTXwDGt2X\nLPIDX+vdQx3Q2KFc2yaJ6VNSoT9UiQ+pUlfWaXnJfzbv2gu6n/SuzKpPAoGAeoJl\n+oytjj7qTApV3r8Vh1H5qG4mUR+TEGIvUHeSbpn874IzeQYxBjhinc+EBHWnEZ6C\n4vJtLIkQQekWly+agSzfsa7ogA/ONFX8NazWytvCWsTFAlWezYp76jtCRQPtF2ok\n/oKR0Q++WDpz9xMNt+8sOQk2wRjyHSmS+B/TRFMCgYEAgUrvzxXLlc5ihWvSq9vz\nYGhbfWlBUvDvbbfK0A8sxkV0PPWI9ghOTR8KWJRCrtB9Dw7EEil72EPMxYD8C5SS\n5AzDDXOYt5h+4cQg9s1LYxchVWP6P8Fd++hHWgcSnItleQNK/BSuQdTuqAsEgqQJ\nK/CEkwryD6YGObkEfeCN6sU=\n-----END PRIVATE KEY-----\n",
    client_email: "bottg-487@bot-tabl.iam.gserviceaccount.com",
    client_id: "109310912610121187539",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/bottg-487%40bot-tabl.iam.gserviceaccount.com",
};

async function getNicknameByTelegramId(telegramId) {
    try {
        await doc.useServiceAccountAuth(googleCredentials);
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();

        const row = rows.find(r => r.telegramId === telegramId);
        return row ? row['Ваш Nick'] : null;
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        return null;
    }
}

export { getNicknameByTelegramId };
