const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    console.log('kwikPal: getting all users');

    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Create a new user
  async createUser(req, res) {
    console.log('kwikPal: creating a new user');

    try {
      const user = await User.create({ 
        username: req.body.username.trim(),
        email: req.body.email.trim()
      });

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a user
  async getSingleUser(req, res) {
    console.log('kwikPal: getting a single user');

    try {
      const user = await User.findOne({ _id: req.params.id })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Put to update a user
  async updateUser(req, res) {
    console.log('kwikPal: updating a user');

    try {
      const user = await User.updateOne(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    console.log('kwikPal: deleting a user');

    try {
      const userInDB = await User.findOne({ _id: req.params.id });
      if (!userInDB) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      const user = await User.findOneAndDelete({ _id: req.params.id });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Add a friend to the friend's list
  async addFriend(req, res) {
    console.log('kwikPal: adding a friend');

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove friend from friend's list
  async removeFriend(req, res) {
    console.log('kwikPal: removing a friend');
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: req.params.friendId } },
        { new: true },
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
