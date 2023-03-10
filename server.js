const db = require('./db')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const UserRouter = require('./routes/UserRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is the root')
})

app.use('/users', UserRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`)
})
