const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
    teamKillCount: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = User
