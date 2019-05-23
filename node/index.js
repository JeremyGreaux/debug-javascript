const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const number = Math.floor(Math.random() * Math.floor(100));
  res.send('Nombre random: ' + number);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})