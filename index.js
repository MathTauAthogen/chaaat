var express = require('express')
var app = express()

app.use(require('helmet')())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
