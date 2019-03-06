const express = require('express')
const PostsRouter = require('./posts/posts-router.js')
const server = express()
server.use(express.json())
server.use('/api/posts', PostsRouter)
const PORT = 9090

server.get('/', (req, res) => {
  res.send`<h2>Welcome to the Posts API</h2>`
})

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`)
})
