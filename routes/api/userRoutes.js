const router = require('express').Router();
const {
  getUsers,
  createUsers,
} = require('../../controllers/studentController');

// /api/users
router.route('/').get(getUsers).post(createUsers);

module.exports = router;
