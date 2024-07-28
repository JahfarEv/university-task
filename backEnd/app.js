const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./src/routes/userRouter')


app.use(express.json())
app.use(cors())

app.use('/api/users',userRouter)

module.exports = app