require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

require('dns').lookup(require('os').hostname(), function (err, ip, fam) {
  app.use(express.static('dist'));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

  app.listen(port, () =>
    console.log(`Example app listening at ${ip}:${port}`)
  );
})

