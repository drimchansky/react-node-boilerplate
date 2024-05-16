import * as bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application } from 'express'

dotenv.config()

const app: Application = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (_req, res) => {
  res.json({ message: 'It works' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
