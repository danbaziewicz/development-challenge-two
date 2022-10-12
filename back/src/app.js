import express from 'express'
import userController from './controller/user-controller.js'

const app = express()

app.use(express.json())

userController(app)

export default app