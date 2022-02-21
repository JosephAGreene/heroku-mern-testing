const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send("this is test route");
});

module.exports = router;