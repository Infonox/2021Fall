const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express()
const PORT = process.env.PORT || 8080;

app.use(serveStatic(path.join(__dirname, '../docs')));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})