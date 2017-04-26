const express = require('express')
const app = express()
const path = require('path')

const port = 4000

app.use('/', express.static('../build'))

app.listen(port, function() {
  console.log(`Server Start Port ${port}`)
})

app.get('/api/study', function(req, res) {
  const responseData = "Response Ok"
  res.json(responseData)
})

app.get('*', function(req, res, next) {
  console.log(req.path)
  if(req.path.split('/')[1] === 'static') {
    console.log("static")
    return next();
  }
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
})