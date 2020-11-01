var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers.js");

router.get("/", function (req, res) {
    cat.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});




module.exports = router;