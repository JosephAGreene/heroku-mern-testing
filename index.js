const express = require("express");
const app = express();
const path = require("path");

require("./startup/db")();
require("./startup/routes")(app);

// Because the server-side render of a React application requires the project to be 
// compiled into a built (dist) folder, which wastes time after every change in development,
// we will only do so while in PRODUCTION mode.
if(process.env.MODE === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "client", "dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

const port = (process.env.PORT || 5000);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});

module.exports = server;