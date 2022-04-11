const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! This app from express nodejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
