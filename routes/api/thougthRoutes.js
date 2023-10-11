const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
} = require('../../controllers/thoughtsController');

// /api/thought -> get ALL thougths, post create SINGLE thought 
router.route('/').get(getThoughts).post(createThought);
// /api/thought/id -> get, put (update) single thought 
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);
// /api/thought/id/reaction/id -> post (create) reaction
router.route('/:id/reaction/:reactionId').post(createReaction);

module.exports = router;
