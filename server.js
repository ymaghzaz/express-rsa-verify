'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/verify", function (req, res) {
  res.send({ status: "ok", verify: 1 });
});
app.get("/ok", function (req, res) {
  res.send({ status: "ok", verify: 1 });
});

app.get("/no", function (req, res) {
  res.send({ status: "ko", verify: 0 });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
