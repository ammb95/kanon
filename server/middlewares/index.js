import { json } from 'express';
import handleError from './custom/handle-error';
import corsConfig from './custom/cors-config';

export const preMiddlewares = [corsConfig, json()];
export const postMiddlewares = [handleError];
