const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
      get: formattedDate,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [ reactionSchema ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id:false,
  }
);

// Virtual for reactionCount
thoughtSchema
.virtual('reactionCount')
.get(function () {
  return this.reactions.length;
});

// Function to format the date and return
function formattedDate (createdAt) {
  return createdAt;
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
