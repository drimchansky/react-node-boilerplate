import express from 'express';
import { Application } from 'express';
import cors from "cors";
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.json({ message: 'It works' })
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
