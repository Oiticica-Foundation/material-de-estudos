import { Router } from "express";
import { Example } from "./example.controller.js";
const router = Router();

router.use((req, res, next) => {
  console.log('Horário: ', Date.now())
  next()
});

router.get('/', async (req, res) => {
  try {
    const exampleController = new Example()
    const text = await exampleController.textOk()
    res.send(text)
  } catch (error) {
    res.send(error?.message).status(500)
  }
});

router.get('/ajuda', async (req, res) => {
  try {
    res.send('Ajuda sobre pássaros')
  } catch (error) {
    res.send(error?.message).status(500)
  }
});

export { router }