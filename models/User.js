const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual for friendsCount
userSchema
.virtual('friendsCount')
.get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
