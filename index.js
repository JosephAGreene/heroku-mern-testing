const express = require("express");
const app = express();
const path = require("path");

require("./startup/routes")(app);

app.use(express.static(path.join(__dirname, "client", "dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const port = process.env.port || "3900";

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});

module.exports = server;