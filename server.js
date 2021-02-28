require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./api/models')

const PORT = process.env.PORT || 8000
const rootViews = __dirname + '/api/views'

app.use(express.static(rootViews))

app.get('/answers', async (req, res) => {
  try {
    const answers = await db.Answer.find({})
    res.json(answers)
  } catch(err) {
    console.log('db err: ', err)
  }

})

app.listen(PORT, () => console.log(`Up and running on ${PORT}`))
