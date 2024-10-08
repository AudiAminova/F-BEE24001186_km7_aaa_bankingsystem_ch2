// Janlankan file JS ini untuk menjalankan sistem bank.
import { BankAccount, RekeningTabungan } from './Bank_Account2.js'; // mengimpor kelas BankAccount dan RekeningTabungan dari file Bank_Account2.js
import readline from 'readline'; // untuk membaca input pengguna dari terminal

// interface readline untuk membaca input dari terminal dan menampilkan teks ke terminal
const userInput = readline.createInterface({
    input: process.stdin, // menentukan sumber input untuk antarmuka readline
    output: process.stdout // menentukan tujuan output untuk antarmuka readline
});

// function untuk menanyakan pertanyaan
const bertanya = (pertanyaan) => {
    return new Promise((resolve) => {
        userInput.question(pertanyaan, (jawaban) => {
        resolve(jawaban);
        });
    });
};

// function untuk menerima input jawaban user
const main = async () => {
    console.log("~~SELAMAT DATANG DI SKYBANK~~")
    const nama = await bertanya('Masukkan nama Anda: '); // menunggu hasil function bertanya yang akan meminta input dari user
    const no_rek = await bertanya('Masukkan nomor rekening Anda: ');
    const saldo = parseFloat(await bertanya('Masukkan saldo awal: '));

    // membuat objek akun untuk BankAccount
    const akun = new BankAccount(nama, no_rek, saldo);
    
    // function untuk user memilih opsi
    const pilihan = await bertanya('Pilih opsi berikut:\n1. Tambah Saldo\n2. Kurangi Saldo\n3. Tambah Bunga Bank (untuk rekening tabungan)\n');

    if (pilihan == 1) { // pilihan 1 untuk tambah saldo
        const amount = parseFloat(await bertanya('Masukkan jumlah setoran: ')); // parseFloat untuk mengkonversi string menjadi angka desimal
        akun.deposit(amount).then((message) => { // memanggil method deposit untuk menambah saldo
            console.log(message); // pesan ditampilkan
            userInput.close();
        });
    } else if (pilihan == 2) { // pilihan 2 untuk penarikan
        const amount = parseFloat(await bertanya('Masukkan jumlah saldo yang ingin ditarik: ')); // parseFloat untuk mengkonversi string menjadi angka desimal
        akun.withdraw(amount).then((message) => { // memanggil method witdraw untuk penarikan saldo
                console.log(message); // jika saldo cukup, menampilkan pesan berhasil dan sisa saldo
                userInput.close();
            })
            .catch((error) => { // jika saldo tidak cukup, menampilkan pesan saldo tidak cukup
                console.log(error);
                userInput.close();
            });
    } else if (pilihan == 3) { // pilihan 3 untuk menghitung bunga bank berdasarkan suku bunga(%) dan jumlah bulan
        const suku_bunga = parseFloat(await bertanya('Masukkan suku bunga (%): ')); // parseFloat untuk mengkonversi string menjadi angka desimal
        const jmlh_bulan = parseInt(await bertanya('Masukkan jumlah bulan: ')); // parseInt untuk mengkonversi string menjadi angka bulat
        const akunTabungan = new RekeningTabungan(nama, no_rek, saldo, suku_bunga, jmlh_bulan); // membuat objek akunTabungan untuk RekeningTabungan
        akunTabungan.tambah_bunga_bank().then((message) => { // memanggil method tambah_bunga_bank untuk menghitung bunga bank
            console.log(message);
            userInput.close();
        });
    } else { // jika user memilih selain 3 opsi di atas, pesan kesalahan akan ditampilkan
        console.log('Tidak ada opsi yang Anda pilih.'); 
        userInput.close();
    }
};

// menjalan function utama/main
main();