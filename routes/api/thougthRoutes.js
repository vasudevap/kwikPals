const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
} = require('../../controllers/thoughtsController');

// /api/thought -> get ALL thougths, post create SINGLE thought 
router.route('/').get(getThoughts).post(createThought);
// /api/thought/id -> get, put (update) single thought 
router.route('/:id').get(getSingleThought).put(updateThought);

module.exports = router;
