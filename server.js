require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const db = require('./api/models')

const PORT = process.env.PORT || 8000
const rootViews = __dirname + '/api/views'

app.use(express.static(rootViews))

io.on('connection', socket => {
  socket.emit('hello', 'world!')

  socket.on('hello', arg => {
    console.log(arg)
  })
})

app.get('/', (req,res) => {
  console.log('serving root')
  res.sendFile(rootViews + '/app/index.html')
})

app.get('/answers', async (req, res) => {
  try {
    const answers = await db.Answer.find({})
    res.json(answers)
  } catch(err) {
    console.log('db err: ', err)
  }

})

server.listen(PORT, () => console.log(`Up and running on ${PORT}`))
