const Buku = require("../models/Buku.model");

class BukuController {
  static create(req, res) {
    let { judul, pengarang, penerbit, tahun_terbit } = req.body;

    // Create Buku
    const buku = new Buku({
      judul: judul,
      pengarang: pengarang,
      penerbit: penerbit,
      tahun_terbit: tahun_terbit
    });

    // Save buku ke dalam Database
    buku
      .save()
      .then(data => {
        res.json({
          data: data,
          status: {
            message: "Berhasil menambahkan buku"
          }
        });
      })
      .catch(error => {
        res.json({
          data: null,
          status: {
            message: "Gagal menambahkan buku"
          }
        });
      });
  }

  static findAll(req, res) {
    Buku.find()
      .then(buku => {
        res.json({
          data: buku,
          status: {
            message: "Success"
          }
        });
      })
      .catch(error => {
        res.json({
          data: null,
          status: {
            message: "Error"
          }
        });
      });
  }

  static findOne(req, res) {
    let { bId } = req.params;
    Buku.findById(bId)
      .then(buku => {
        if (!buku) {
          return res.status(404).json({
            data: null,
            message: "Buku tidak ditemukan"
          });
        }
        res.json({
          data: buku,
          message: "Success"
        });
      })
      .catch(error => {
        if (error.kind === "ObjectId") {
          return res.status(404).json({
            data: null,
            message: "Buku tidak ditemukan"
          });
        }

        return res.status(500).json({
          message: "Internal server error"
        });
      });
  }

  static update(req, res) {
    
  }

  static delete(req, res) {
    let { bId } = req.params;
    Buku.findByIdAndUpdate(bId)
      .then(() => {
        res.json({
          message: "Berhasil hapus buku"
        });
      })
      .catch(() => {
        res.json({
          message: "Gagal hapus buku"
        });
      });
  }
}

module.exports = BukuController;
