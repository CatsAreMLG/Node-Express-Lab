const express = require('express')

const Posts = require('../data/db.js')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving the posts'
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving the posts'
    })
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

module.exports = router
