console.log("Selamat Datang di SkyBank!!");

class SkyBank {
    constructor() {
        this.saldo = 0; // saldo awal
    }

    // method untuk menambah saldo
    tambahSaldo() {
        const inputTambah = window.prompt("Masukkan jumlah yang ingin ditambah: (masukkan angka saja, contoh 100000)");
        const jumlahTambah = Number(inputTambah); // mengkonversi input ke angka
        if (!isNaN(jumlahTambah) && jumlahTambah > 0) { // isNan untuk memeriksa apakah nilai  yang diberikan adalah Not a Number
            this.saldo += jumlahTambah; // menambahkan jumlahTambah ke this.saldo
        } else {
            console.log("Input tidak valid! Masukkan angka yang benar."); // jika kondisi if tidak terpenuhi, pesan kesalahan ditampilkan
        }
        return this.saldo;
    }

    // method untuk mengurangi saldo
    kurangiSaldo() {
        const inputKurang = window.prompt("Masukkan jumlah yang ingin dikurangi: (masukkan angka saja, contoh 100000)");
        const jumlahKurang = Number(inputKurang); // mengkonversi input ke angka
        if (!isNaN(jumlahKurang) && jumlahKurang > 0 && jumlahKurang <= this.saldo) {
            this.saldo -= jumlahKurang;
        } else {
            console.log("Input tidak valid atau saldo tidak cukup!"); // jika kondisi if tidak terpenuhi/ saldo tidak cukup, pesan kesalahan ditampilkan
        }
        return this.saldo;
    }

    // method untuk menampilkan opsi kepada user
    opsi() {
        const pilihan = window.prompt("Pilih opsi berikut: \n1. Tambah Saldo\n2. Kurangi Saldo \nMasukkan pilihan anda: ");
        if (pilihan == 1) { // pilihan 1 untuk tambah saldo
            return this.tambahSaldo();
        } else if (pilihan == 2) { // pilihan 2 untuk kurangi saldo
            return this.kurangiSaldo();
        } else { // jika memilih opsi lain yang tidak tersedia, pesan kesalahan ditampilkan
            console.log("Pilihan tidak tersedia!!");
            return this.saldo;
        }
    }
}

// membuat objek dari class SkyBank
const bank = new SkyBank();
const saldoBaru = bank.opsi();
console.log(`Saldo anda saat ini: ${saldoBaru}`);