
const express = require('express');
const app = express();

const CONFIG = {
  PORT: 3000,
  IP: "localhost"
}

// when we get HTTP request on /
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${CONFIG.PORT}`);
});
