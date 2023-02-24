const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
      name: 'CYCLE',
      teamKillCount: 0
    },
    {
      name: 'Esceleto',
      teamKillCount: 1
    }
  ]

  await User.insertMany(users)
  console.log('Test users added!')
}

const run = async () => {
  await main()
  db.close()
}

run()
