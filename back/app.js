import express from 'express'
import userController from './controller/user-controller.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
userController(app)

export default app