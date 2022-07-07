import express from 'express';
const categoriesRouter = () => {
  const router = express.Router();

  router.get('/', (req, res) => { });
  router.get('/:id', (req, res) => { });
  router.post('/', (req, res) => { });
  router.put('/:id', (req, res) => { });
  router.delete('/:id', (req, res) => { });
};
export default categoriesRouter;
