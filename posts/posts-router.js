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

module.exports = router
