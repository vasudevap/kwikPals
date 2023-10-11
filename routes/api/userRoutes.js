const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteCourse,
} = require('../../controllers/userController');

// /api/users -> get, post
router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteCourse);

module.exports = router;
