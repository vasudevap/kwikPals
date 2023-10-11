const router = require('express').Router();
const {
  getThoughts,
  createThought,
} = require('../../controllers/thoughtsController');

// /api/thought -> get ALL thougths, post create SINGLE thought 
router.route('/').get(getThoughts).post(createThought);


module.exports = router;
