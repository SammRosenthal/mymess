const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // TODO: route to business logic
  //       that will handle posts
  res.send(200);
});

module.exports = router;
