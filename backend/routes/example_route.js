const express = require("express");

const exampleController = require('../controllers/example_controller');

const router = express.Router();

router.post("/example_create", exampleController.example_create);

router.get("/example_all_created", exampleController.example_get_all_created);

router.put("/example_edit/:id", exampleController.example_edit);

router.delete("/example_remove/:id", exampleController.example_delete);

module.exports = router;