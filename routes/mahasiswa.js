var mahasiswa = require("../model/mahasiswa").mahasiswa;
var mongoose = require("mongoose");
var config = require("../config/database");
var express = require("express");
var router = express.Router();
 
//connect Database
mongoose.connect(config.database, { useNewUrlParser: true });

//get All Data mahasiswa
router.get("/", function(req,res) {
    mahasiswa.find({}, function(err,data) {
        if(err) {
            return res.send(err);
        }
        res.json(data);
    });
});

//get Data mahasiswa by Id
router.get("/:id", function(req,res) {
	var id = req.params.id;
	mahasiswa.findById(id, function (err, data) { 
		if(err) {
            return res.send(err);
        }
        res.json(data);
	});	
});
 
//create new data mahasiswa
router.post("/create", function(req,res) {
    var data = new mahasiswa;
    data.nama = req.body.nama;
    data.jenisKelamin = req.body.jenisKelamin;
    data.alamat = req.body.alamat;
    data.jurusan = req.body.jurusan;
    data.save(function(err) {
        if(err) {
            return res.send(err);
        }
        res.json({"status": "200", "keterangan": "Success Create a Data"});
    });
});
 
//delete data mahasiswa by id
router.delete("/delete", function(req,res) {
    mahasiswa.remove({"_id":req.body.id}, function(err) {
        if(err) {
            return res.send(err);
        }
        res.json({"status":"200", "keterangan":"Success Delete a Data"});
    });
});
 
//  ubah data student
router.put("/update", function(req,res) {
    mahasiswa.update(
		{"_id":req.body.id},
		{
			"nama":req.body.nama,
			"jenisKelamin":req.body.jenisKelamin,
			"alamat":req.body.alamat,
			"jurusan":req.body.jurusan,
		}, function(err,data) {
        if(err) {
            return res.send(err);
        }
        res.json({"status": "200", "keterangan": "Success Modify a Data"});
    });
});
 
module.exports = router;