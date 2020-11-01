var express = require("express");

var router = express.Router();

var burgers = require("../models/burger");

router.get("/", function (req, res) {
    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});




module.exports = router;