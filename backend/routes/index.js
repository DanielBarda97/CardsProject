const express = require("express");

const router = express.Router();

router.get("/",(req,res) => {
  res.json({msg:"vs code 9999999"})
})

module.exports = router;