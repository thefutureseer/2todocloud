const express = require('express');

const app = express();

const port = 8080

app.get('/', (req, res) => res.send("To Do List Data Here"))

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});