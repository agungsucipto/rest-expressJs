var express = require("express");
var router = express.Router();
 
//  root
router.get("/", function(req,res) {
    res.json({"status": "200", "keterangan": "Welcome To Rest API"});
});

module.exports = router;