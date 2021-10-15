import { json } from 'express';
import handleError from './custom/handle-error';

export const preMiddlewares = [json()];
export const postMiddlewares = [handleError];
