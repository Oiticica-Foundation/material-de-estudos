import { Router } from "express";
const router = Router();

router.use((req, res, next) => {
  console.log('Horário: ', Date.now())
  next()
});

router.get('/', (req, res) => {
  res.send('Homepage de pássaros')
});

router.get('/ajuda', (req, res) => {
  res.send('Ajuda sobre pássaros')
});

export { router }