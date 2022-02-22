const express = require("express");
const app = express();
const path = require("path");

require("./startup/db")();
require("./startup/routes")(app);

app.use(express.static(path.join(__dirname, "client", "dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const port = (process.env.PORT || 5000);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});

module.exports = server;