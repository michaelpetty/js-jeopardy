const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log(`MongoDB connected at ${process.env.MONGODB_URI}`))
  .catch((err) => console.log('MongoDB connection error: ', err))

module.exports = {
  Answer: require('./Answer')
}
