const { model } = require('mongoose')
const UserSchema = require('./User')

const User = model('User', UserSchema)

module.exports = {
  User
}
