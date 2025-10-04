class Study {
  constructor(nama, nim, nilai) {
    this.nama = nama; // Atribut publik
    this.nim = nim;   // Atribut publik

    // Atribut "private" dengan closure
    let _nilai = nilai;

    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log(' Nilai harus antara 0 dan 100');
      }
    };

    //  Method tambahan 1: menampilkan info mahasiswa
    this.tampilkanInfo = function() {
      console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Nilai: ${_nilai}`);
    };

    //  Method tambahan 2: menentukan status kelulusan
    this.statusKelulusan = function() {
      if (_nilai >= 75) {
        console.log(`${this.nama} dinyatakan LULUS `);
      } else {
        console.log(`${this.nama} dinyatakan TIDAK LULUS `);
      }
    };
  }
}

// --- Contoh penggunaan ---
const s1 = new Study('Mela', 342, 85);
s1.tampilkanInfo();       // Nama: Mela, NIM: 342, Nilai: 85
s1.statusKelulusan();     // Mela dinyatakan LULUS 

s1.setNilai(60);          // Ubah nilai
s1.tampilkanInfo();       // Nama: Mela, NIM: 342, Nilai: 60
s1.statusKelulusan();     // Mela dinyatakan TIDAK LULUS 

