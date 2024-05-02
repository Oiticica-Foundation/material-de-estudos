
import express from "express";
import { router } from './src/routes.js';
const app = express();
const port = 3333;
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
