import dotenv from 'dotenv';

dotenv.config();

export const { PORT, JWT_KEY, ORIGIN, ORIGIN_S } = process.env;
