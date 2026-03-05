const Post = require('../models/Post');

exports.getPosts = async (_req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json({ message: 'Post deleted' });
};
