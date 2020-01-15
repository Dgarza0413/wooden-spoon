const db = require("../models");

// Defining methods for the prodController
module.exports = {
    findAll: (req, res) => {
        db.Recipe
            .find(req.query)
            .sort({ date: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Recipe
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Recipe.findById(req.params.id, function (err, well) {
            // if (err) {
            //     console.log(err);
            // } else {
            //     db.Production.create(req.body, function (err, prod) {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             well.productionId.push(prod);
            //             well.save();
            //         }
            //     });
            // }
        }).then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Production
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Production
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};