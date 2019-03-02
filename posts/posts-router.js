const express = require('express')

const Posts = require('../data/db.js')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find()
    res.status(200).json(posts)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'The posts information could not be retrieved.' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id)
    post.length
      ? res.status(200).json(post)
      : res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'The post information could not be retrieved.' })
  }
})

router.post('/', async (req, res) => {
  if (req.body && req.body.title && req.body.content)
    try {
      const post = await Posts.insert(req.body)
      res.status(201).json({ ...post, ...req.body })
    } catch (error) {
      res.status(500).json({
        error: 'There was an error while saving the post to the database'
      })
    }
  else
    res
      .status(400)
      .json({ errorMessage: 'Please provide title and contents for the post.' })
})

router.delete('/:id', async (req, res) => {
  try {
    const post = await Posts.remove(req.params.id)
    post
      ? res.status(200).json(post)
      : res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' })
  } catch (error) {
    res.status(500).json({ error: 'The post could not be removed' })
  }
})

module.exports = router
