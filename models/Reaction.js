const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/helper'); 

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
      //use moment to format date on input
      get: time => formatDate(time), 
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
