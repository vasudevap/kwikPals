const { Schema, model, now } = require('mongoose');
const userSchema = require('./User');

// Schema to create Student model
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
    },
    // thoughts: [thoughtSchema],
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    // reactions: [
    //   {
    //     reactionId:
    //     reactionUserId:
    //     reactionBody:
    //   }
    // ]
  },
  {
    toJSON: {
      getters: true,
    },
    id:false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
