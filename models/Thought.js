const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment'); 

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
      //use moment to format date on input
      get: time => formattedDate(time), 
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual for reactionCount
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

// Function to format the date and return
const formattedDate = function(createdAt) {
  return moment(createdAt).format('MMMM Do YYYY, h:mm a'); // October 12th 2023, 4:30 pm
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
