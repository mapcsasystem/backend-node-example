import express from 'express';
const productsRouter = () => {
  const router = express.Router();

  router.get('/', (req, res) => { });
  router.get('/:id', (req, res) => { });
  router.post('/', (req, res) => { });
  router.put('/:id', (req, res) => { });
  router.delete('/:id', (req, res) => { });
};
export default productsRouter;
