const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users -> get ALL users, post create SINGLE user 
router.route('/').get(getUsers).post(createUser);

// /api/users -> get, put, delete a SINGLE user by id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:id/friends/friendId -> put, delete a SINGLE friend by id
router.route('/:id/friends/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;
