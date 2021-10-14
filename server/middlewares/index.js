import express from 'express';
import errorHandler from './error-handler';

export const preMiddlewares = [express.json()];
export const postMiddlewares = [errorHandler.handle];
