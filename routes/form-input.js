const express = require("express");
const router = express.Router();

router.get("/form-input", (req, res) => {
  try {
    const formField = require("../form.json");

    res
      .status(200)
      .json({ message: "Form field get successfully", data: formField });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get form field data" });
  }
});

module.exports = router;
