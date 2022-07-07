import express from 'express';
import categoriesRouter from './categories.router.js';
import productsRouter from './products.router.js';
import usersRouter from './users.router.js';

const routerApiV1 = () => {
  const router = express.Router();
  router.use('api/v1', router);
  router.use('/users', usersRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
};

export default routerApiV1;
