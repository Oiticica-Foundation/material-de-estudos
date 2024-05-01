import { Router } from "express";
import { Example } from "./controller/example.controller.js";
const router = Router();
const exampleController = new Example()
router.use((req, res, next) => {

  console.log('Horário: ', Date.now())
  next()
});

router.post('/products', async (req, res) => {
  try {
    console.log(req.body)
    const { name, price } = req.body;
    const result = await exampleController.create(name, price)
    console.log(result);
    res.send(result).status(201)
  } catch (error) {
    res.send(error?.message).status(500)
  }
});

router.get('/products', async (req, res) => {
  try {

    const result = await exampleController.find()
    res.send(result).status(200)
  } catch (error) {
    res.send(error?.message).status(500)
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const id = req.params.id
    const result = await exampleController.findOne(id)
    res.send(result).status(200)
  } catch (error) {
    res.send(error?.message).status(500)
  }
});


router.patch('/products/:id', async (req, res) => {
  try {
    const id = req.params.id
    const { name, price } = req.body;
    const result = await exampleController.update(name, price, id)
    res.send(result).status(200)
  } catch (error) {
    res.send(error?.message).status(500)
  }
});


router.delete('/products/:id', async (req, res) => {
  try {
    const id = req.params.id
    const result = await exampleController.remove(id)
    res.send(result).status(200)
  } catch (error) {
    res.send(error?.message).status(500)
  }
});



export { router }