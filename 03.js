class Mahasiswa{
  constructor(nama,nim,jurusan){
    
this.nama=nama;
    this.nim=nim;
    this.jurusan=jurusan;
  }

  belajar(){
   conlog.log('$this.nama}sedang belajar.');
  }
}
int_mhs1 = new Mahasiswa('mela', 1567, 'informatika');
mhs1.belajar();

int_mhs2 = new Mahasiswa('ulya', 3458, 'manajemen');
mhs2.belajar();

    

