const express = require("express");

const googleHomeTestController = require('../controllers/minitest');

const router = express.Router();

router.post("/connect-test-one", googleHomeTestController.testOne);

// router.get("/example_all_created", exampleController.example_get_all_created);

// router.put("/example_edit/:id", exampleController.example_edit);

// router.delete("/example_remove/:id", exampleController.example_delete);

module.exports = router;