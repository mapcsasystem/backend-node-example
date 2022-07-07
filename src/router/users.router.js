import express from 'express';
const router = express.Router();
function usersRouter() {
  router.get('/', (req, res) => { });
  router.get('/:id', (req, res) => { });
  router.post('/', (req, res) => { });
  router.put('/:id', (req, res) => { });
  router.delete('/:id', (req, res) => { });
}
export default usersRouter;
