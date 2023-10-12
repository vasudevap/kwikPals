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
  // Create one thought for one user
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
  // Put update one thought
  async updateThought(req, res) {
    console.log('kwikPals: updating a new thought');

    try {
      const updatedThought = await Thought.findOneAndUpdate(
        {
          _id: req.params.id
        },
        {
          thoughtText: req.body.thoughtText
        },
        {
          new: true
        }
      );

      if (!updatedThought) {
        throw new Error('Could not find thought to update in DB');
      }

      res.json(updatedThought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete one thought
  async removeThought(req, res) {
    console.log('kwikPals: deleting a new thought');

    try {

      const thought = await Thought.findOne(
        { _id: req.params.id }
      )

      if (!thought) {
        throw new Error('Thought was not found in DB');
      }

      const user = await User.findOneAndUpdate(
        { username: thought.username },
        { $pull: { thoughts: req.params.id } },
        { new: true }
      );

      if (!user) {
        throw new Error('Could not find user in DB');
      }

      const deletedThought = await Thought.findOneAndRemove(
        { _id: req.params.id }
      );

      if (!deletedThought) {
        throw new Error('Removed from user but could not delete thought in DB');
      }

      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Create one reaction
  async createReaction(req, res) {
    console.log('kwikPals: creating a new reaction');

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        throw new Error('Could not get/update thought in DB with new reaction');
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete one reaction
  async removeReaction(req, res) {
    console.log('kwikPals: removing a reaction');

    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        throw new Error('Could not delete reaction from thought in DB');
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}
