const { User } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Create a course
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a user
  async getSingleUser(req, res) {
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
  // Delete a course
  async deleteCourse(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });

      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  //       await Thought.deleteMany({ _id: { $in: user.thougths } });
  //       res.json({ message: 'User and thougths deleted!' });
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   },
  //   // Update a course
  //   async updateUser(req, res) {
  //     try {
  //       const user = await User.findOneAndUpdate(
  //         { _id: req.params.userId },
  //         { $set: req.body },
  //         { runValidators: true, new: true }
  //       );

  //       if (!user) {
  //         res.status(404).json({ message: 'No user with this id!' });
  //       }

  //       res.json(user);
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   },
};
