import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application } from 'express'

import { getMessage } from './functions/getMessage.mjs'

dotenv.config()

const app: Application = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (_req, res) => {
  res.json({ message: getMessage() })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
