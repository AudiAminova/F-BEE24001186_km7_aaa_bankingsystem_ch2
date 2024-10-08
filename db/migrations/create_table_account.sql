-- -- tabel Nasabah
-- CREATE TABLE Nasabah (
--     nasabah_id BIGSERIAL PRIMARY KEY,
--     nama VARCHAR(255) NOT NULL,
--     alamat VARCHAR(255) NOT NULL,
--     no_telp VARCHAR(20) NOT NULL
-- );

-- -- tabel Akun
-- CREATE TABLE Akun (
--     akun_id BIGSERIAL PRIMARY KEY,
--     no_rek VARCHAR(20) NOT NULL UNIQUE, -- penggunaan UNIQUE untuk no rek harus berbeda di seluruh tabel
--     saldo DECIMAL(15, 2) DEFAULT 0.00,
--     nasabah_id BIGINT, 
--     FOREIGN KEY (nasabah_id) REFERENCES Nasabah(nasabah_id) ON DELETE CASCADE -- ketika nasabah dihapus dari tabel Nasabah, semua akun yang terkait dengan nasabah tersebut juga akan dihapus
-- );

-- CREATE TYPE jenis_transaksi_enum AS ENUM ('Deposit', 'Withdraw'); -- custom tipe data

-- CREATE TABLE Transaksi (
--     transaksi_id BIGSERIAL PRIMARY KEY,
--     jenis_transaksi jenis_transaksi_enum NOT NULL,
--     jumlah_transaksi DECIMAL(15, 2) NOT NULL,
--     waktu_transaksi TIMESTAMP NOT NULL DEFAULT NOW(),
--     akun_id BIGINT,
--     FOREIGN KEY (akun_id) REFERENCES Akun(akun_id) ON DELETE CASCADE 
-- );

-- ALTER TABLE Nasabah
-- ADD COLUMN email VARCHAR(100) NOT NULL UNIQUE;

DROP TABLE Account;