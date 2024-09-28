/* Challange Chapter 2
Program ini mensimulasikan fitur dasar perbankan, yaitu:
1. Penyetoran (deposit)
2. Penarikan (withdraw)
3. Penambahan bunga pada akun tabungan.
Program ini mendefinisikan dua class, yaitu class BankAccount dan class RekeningTabungan.
1. BankAccount untuk menyimpan data akun tabungan. Memiliki metode deposit dan withdraw.
2. RekeningTabungan untuk menyimpan data rekening tabungan. Memiliki metode tambah_bunga_bank berdasarkan suku bunga dan jumlah bulan.
Cara kerja program:
1. User membuat akun dengan memasukkan nama, rekening, dan saldo awal.
2. User diberikan 3 opsi berikut:
    a. Penyetoran (deposit)
    b. Penarikan (withdraw)
    c. Penambahan bunga pada akun tabungan dengan menginput suku bunga (%) dan jumlah bulan.
3. Program akan menampilkan pesan yang sesuai dengan opsi pilihan user setelah 2 detik.
*/

// class utama/ parent class
export class BankAccount {
    constructor(nama, no_rek, saldo) {
        this.nama = nama;
        this.no_rek = no_rek;
        this.saldo = saldo;
    }

/* method deposit untuk menambahkan saldo ke akun user
method ini mengambil parameter amount yaitu jumlah uang yang akan disetor */
deposit(amount) {
    return new Promise((resolve) => {
        setTimeout(() => { // menunda eksekusi selama 2 detik
            this.saldo += amount; // amount ditambahkan ke saldo user
            resolve(`~Akun ${this.nama} telah berhasil melakukan deposit sebesar ${amount}.\nSaldo Anda saat ini adalah ${this.saldo}`); // pesan yang ditampilkan setelah saldo ditambahkan
        }, 2000); 
    });
}

/* method withdraw untuk user menarik uang dari akunnya
method ini mengambil parameter amount yaitu jumlah yang ingin ditarik */
withdraw(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // menunda eksekusi selama 2 detik
            if (amount > this.saldo) {
                reject('~Maaf, saldo Anda tidak mencukupi untuk melakukan penarikan'); // jika saldo tidak cukup, pesan ini ditampilkan
            } else {
                this.saldo -= amount; // jika saldo cukup, amount dikurangi dari saldo akun user
                resolve(`~Akun ${this.nama} telah berhasil melakukan penarikan sebesar ${amount}.\nSaldo Anda saat ini adalah ${this.saldo}`); // jika saldo cukup, pesan ini ditampilkan
            }
        }, 1000);
    });
    }
}


// child class untuk menghitung suku bunga per tahun yang dinyatakan dalam desimal
export class RekeningTabungan extends BankAccount {
    constructor(nama, no_rek, saldo, suku_bunga, jmlh_bulan){
        super(nama, no_rek, saldo); // memanggil constructor parent class
        this.suku_bunga = suku_bunga; // properti untuk persentase bunga
        this.jmlh_bulan = jmlh_bulan; // properti untuk menentukan waktu dalam bentuk jumlah bulan
    }

    // method untuk menambahkan bunga ke saldo user berdasarkan perhitungan suku bunga dan jumlah bulan
    tambah_bunga_bank() {
        return new Promise((resolve) => {
            setTimeout(() => { // menunda eksekusi selama 2 detik
                const bunga_bank = this.saldo * (this.suku_bunga / 100) * (this.jmlh_bulan / 12); // rumus menghitung bunga
                this.saldo += parseFloat(bunga_bank.toFixed(2)); // menambahkan saldo dengan hasil perhitungan bunga dengan ditetapkan 2 angka dibelakang koma
                resolve(`~Bunga sebesar ${bunga_bank.toFixed(2)} telah ditambahkan ke akun ${this.nama}.\nSaldo Anda saat ini ${this.saldo}`);
            }, 2000);
        });
    }
}

