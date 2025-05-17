const googleCredentials = {
  type: "service_account",
  project_id: "bot-tabl",
  private_key_id: "d8bb858d23169164ab57c301561c646ef313683d",  // Можно также вынести в .env
  private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  client_id: "109310912610121187539",  // Можно вынести в .env
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/bottg-487%40bot-tabl.iam.gserviceaccount.com"
};
