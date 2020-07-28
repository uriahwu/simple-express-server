const express = require('express')
const app = express()

// reply to request with "Hello World!"
app.get('/', (req, res) => {
  console.log(req.headers)
  console.log(req.connection.remoteAddress)
  res.send('Hello World!')
})

// start a server on port 3000
const server = app.listen(3000, "0.0.0.0", () => {
  const port = server.address().port
  console.log('Example app listening on port', port)
})
