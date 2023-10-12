const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts -> get ALL thougths, post create SINGLE thought 
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/id -> get, put (update) single thought 
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);
// /api/thoughts/id/reactions/id -> post (create) reaction
router.route('/:id/reactions').post(createReaction);

module.exports = router;
