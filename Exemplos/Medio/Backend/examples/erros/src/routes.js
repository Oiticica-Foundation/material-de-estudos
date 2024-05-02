import { Router } from "express";
const router = Router();

router.use((req, res, next) => {
  console.log('Horário: ', Date.now())
  next()
});

router.get('/', (req, res) => {
  try {
    res.send('Homepage de pássaros')
  } catch (error) {
    res.send(error?.message).status(500)
  }
});

router.get('/ajuda', (req, res) => {
  try {
    res.send('Ajuda sobre pássaros')
  } catch (error) {
    res.send(error?.message).status(500)
  }
});

export { router }