const express = require('express');
const router = express.Router();
const { Test } = require("../models/test")

router.get('/', async (req, res) => {
  const tests = await Test.find().select("-__v");
  res.send(tests);
});

router.post('/', async (req, res) => {
  let test = new Test({ word: req.body.word });
  test = await test.save();

  res.send(test);
})

module.exports = router;