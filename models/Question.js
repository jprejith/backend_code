const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Question = new Schema({
   question: {
      type: String
   },
   answer: {
      type: String
   }
}, {
   collection: 'questions_answers'
})

module.exports = mongoose.model('Question', Question)