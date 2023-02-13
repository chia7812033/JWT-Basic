const { BadRequestError } = require('../errors')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new BadRequestError('Please provide username and password')
  }

  // normally provided by DB
  const id = new Date().getDate()

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

  res.status(200).json({ msg: 'User created', token })
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({ msg: `Hello ${req.user.username}!`, secret: `Here is your lucky number ${luckyNumber}` })
}

module.exports = { login, dashboard }
