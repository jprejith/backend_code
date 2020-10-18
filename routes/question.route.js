const express = require('express');
const app = express();
const questionRoute = express.Router();

// Question model
let Question = require('../models/Question');

// Add Question
questionRoute.route('/create').post((req, res, next) => {
  Question.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Question
questionRoute.route('/').get((req, res) => {
  Question.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Question
questionRoute.route('/read/:id').get((req, res) => {
  Question.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update question
questionRoute.route('/update/:id').put((req, res, next) => {
  Question.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete question
questionRoute.route('/delete/:id').delete((req, res, next) => {
  Question.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = questionRoute;