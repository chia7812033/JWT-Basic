
const login = async (req, res) => {
  res.send('Fake Login/Register/')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random * 100)
  res.status(200).json({ msg: `Hello Amy!`, secret: `Here is your lucky number ${luckyNumber}` })
}

module.exports = { login, dashboard }
