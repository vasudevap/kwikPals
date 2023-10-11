const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    console.log('kwikPals: getting all thoughts');

    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Get one thought
  async getSingleThought(req, res) {
    console.log('kwikPals: getting a single thought');

    try {
      const thought = await Thought.findOne({
        _id: req.params.id
      });

      if (!thought) {
        throw new Error('Could not find thought in DB');
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }

  },
  // Create a thought for a user
  async createThought(req, res) {
    console.log('kwikPals: creating a new thought');

    try {
      const user = await User.findOne({
        _id: req.body.userId
      });

      if (!user) {
        throw new Error('Could not create Thought; user not in DB');
      }
      const thought = await Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username
      });

      if (!thought) {
        throw new Error('Could not create Thought in DB');
      }

      const updatedUser = await User.updateOne(
        { _id: user._id },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error('Could not link Thought in DB to user');
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  //
};
