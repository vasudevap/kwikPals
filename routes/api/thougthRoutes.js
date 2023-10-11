const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require('../../controllers/thoughtsController');

// /api/thought -> get ALL thougths, post create SINGLE thought 
router.route('/').get(getThoughts).post(createThought);
// /api/thought/id -> get single thought 
router.route('/:id').get(getSingleThought);

module.exports = router;
