const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
} = require('../../controllers/userController');

// /api/users -> get, post
router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingleUser);

module.exports = router;
