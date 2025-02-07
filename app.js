const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Node Server is running on EC2 Backend')
})

app.listen(port, () => {
  console.log(`Backend run on  port ${port}`)
})