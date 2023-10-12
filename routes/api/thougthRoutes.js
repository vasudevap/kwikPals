const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts -> get ALL thougths, post create SINGLE thought 
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/id -> get, put (update) single thought 
router.route('/:id').get(getSingleThought).put(updateThought).delete(removeThought);
// /api/thoughts/id/reactions/ -> post (create) reaction
router.route('/:id/reactions').post(createReaction)
// /api/thoughts/id/reactions/id -> delete (remove) a single reaction
router.route('/:id/reactions/:reactionId').delete(removeReaction);

module.exports = router;
