import dotenv from 'dotenv';

dotenv.config();

export const { PORT, JWT_KEY } = process.env;
