const ExampleModel = require("../models/example_model");

exports.example_create = (req, res, next) => {
    const exampleModel = new ExampleModel({
        exampleName: req.body.examplename,
        exampleBody: req.body.examplebody
    });
    exampleModel.save().then(result => {
        res.status(201).json({
            message: 'Created Successfully!',
            data: result
        });
    });
};

exports.example_get_all_created = (req, res, next) => {
    ExampleModel.find().then((result) => {
        console.log(result);
        res.status(200).json({
            message: 'All Created Fetched Successfully!',
            data: result
        });
    });

    // FIND A SINGLE OBJECT BY ID
    // ExampleModel.findById(req.params.id).then((result) => {
    //     if (result) {
    //         res.status(200).json(result);
    //     } else {
    //         res.status(404).json({
    //             message: 'Not Found!'
    //         });
    //     };
    // });
};

exports.example_edit = (req, res, next) => {
    const exampleModel = new ExampleModel({
        _id: req.params.id,
        exampleName: req.body.examplename,
        exampleBody: req.body.examplebody
    });

    ExampleModel.updateOne({_id: req.params.id}, exampleModel).then((result) => {
        res.status(200).json({
            message: 'Updated Successfully!',
            data: result
        });
    });
};

exports.example_delete = (req, res, next) => {
    ExampleModel.deleteOne({_id: req.params.id}).then((result) => {
        res.status(200).json({
            message: 'Deleted Successfully!',
            data: result
        });
    });
};