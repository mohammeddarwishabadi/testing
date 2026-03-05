const express = require('express');
const auth = require('../middleware/auth');
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
