const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/parks', (req, res) => {
    res.send('parque loco')
  })

  let users = [
      {name: "Lorena", age: 23, phone: "310863053"},
      {name: "Juan", age: 25, phone: "3202386430"}      
  ]

  app.get('/users', (req, res) => {
      res.send(users)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})