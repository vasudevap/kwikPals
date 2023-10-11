const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  updateFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users -> get ALL users, post create SINGLE user 
router.route('/').get(getUsers).post(createUser);

// /api/users -> get, put, delete a SINGLE user by id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').put(updateFriend).delete(deleteFriend);

module.exports = router;
