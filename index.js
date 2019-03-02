const express = require('express')
const server = express()
server.use(express.json())
const PORT = 9090

server.get('/', (req, res) => {
  res.send(`
    <h2>Hellow World!</h>
    <p>Welcome</p>
  `)
})

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`)
})
