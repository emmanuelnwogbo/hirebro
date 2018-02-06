const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  
})

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;