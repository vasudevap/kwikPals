const { Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    console.log('kwikPal: getting all thoughts');

    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    console.log('kwikPal: creating a new thought');

    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
