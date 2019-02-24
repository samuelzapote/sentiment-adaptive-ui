// const ExampleModel = require("../models/example_model");


exports.testOne = (req, res, next) => {
    const resultData = 'API POST REQUEST WORKED!';
    res.status(201).json({
        message: 'Request successful',
        data: resultData
    });
};