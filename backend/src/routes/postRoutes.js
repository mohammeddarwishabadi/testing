const express = require('express');
const upload = require('../config/upload');
const { protect, authorize } = require('../middleware/auth');
const {
  getPosts,
  searchPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');
const { getCommentsByPost, createComment } = require('../controllers/commentController');
const { withCache } = require('../services/cacheService');

const router = express.Router();

router.get('/', withCache('posts', 60 * 1000), getPosts);
router.get('/search', withCache('posts', 60 * 1000), searchPosts);
router.get('/:id', withCache('posts', 60 * 1000), getPostById);
router.get('/:id/comments', getCommentsByPost);
router.post('/:id/comments', protect, createComment);
router.post('/', protect, authorize('admin', 'editor'), upload.single('image'), createPost);
router.put('/:id', protect, authorize('admin', 'editor'), upload.single('image'), updatePost);
router.delete('/:id', protect, authorize('admin'), deletePost);

module.exports = router;
