const mongoose = require('mongoose')

const AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: [ "General", "Data Types", "Control Flow", "Functions", "Objects & Arrays" ],
    required: true
  },
  value: {
    type: String,
    enum: ['200', '400', '600', '800', '1000'],
    required: true
  },
}, {timestamps: true})

module.exports = mongoose.model('Answer', AnswerSchema)
