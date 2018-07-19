var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mahasiswaSchema = new Schema({
    nama: String,
    jenisKelamin: String,
    alamat: String,
    jurusan: String
});
 
var mahasiswa = mongoose.model("mahasiswa", mahasiswaSchema);
module.exports.mahasiswa = mahasiswa;