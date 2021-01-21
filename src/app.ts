import express from 'express'
import { connection } from './mysql'
import { router } from './routes'

const app = express()

connection.connect()

app.use(express.json())
app.use(router)

export { app }