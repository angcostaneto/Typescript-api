import express from 'express'
import { router } from './routes'
import * as dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(router)

dotenv.config()

export { app }