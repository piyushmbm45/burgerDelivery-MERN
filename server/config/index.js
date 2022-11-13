import { config } from 'dotenv';
config();

const { APP_PORT, DEBUG_MODE, DB_URL, JWT_SECRET, REFRESH_SECRET, APP_URL } =
  process.env;

export { APP_PORT, DEBUG_MODE, DB_URL, JWT_SECRET, REFRESH_SECRET, APP_URL };
