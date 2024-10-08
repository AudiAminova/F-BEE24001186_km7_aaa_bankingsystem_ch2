-- INSERT INTO Nasabah (nama, alamat, no_telp, email) VALUES
-- 	('Audi', 'Bogor', '081310100101', 'audi@gmail.com'),
-- 	('William', 'Jagakarsa', '081290908989', 'will@gmail.com'),
-- 	('Salma', 'Bontang', '085767765445', 'salmakal@gmail.com'),
-- 	('Argo', 'Denpasar', '087723324554', 'rawrgo@gmail.com'),
-- 	('Andina', 'Surabaya', '089756652112', 'dinana@gmail.com')
-- ('Bayu', 'Depok', '087866554334', 'bayy@gmail.com');
-- SELECT * FROM Nasabah;

-- INSERT INTO Akun (no_rek, saldo, nasabah_id) VALUES
-- 	('11223344', 10000000, 1),
-- 	('22443311', 2000000, 2),
-- 	('99886776', 0, 3),
-- 	('23324554', 12000000, 4),
-- 	('99001001', 500000, 5);
-- SELECT * FROM Akun;

-- untuk tambah bunga bank
-- UPDATE Akun
-- SET saldo = saldo + (saldo * 0.05 * (6.0 / 12)) 
-- WHERE akun_id IN (11, 12, 13, 14, 15)
-- RETURNING saldo;
-- SELECT * FROM Akun;

-- INSERT INTO Transaksi (jenis_transaksi, jumlah_transaksi, akun_id) VALUES 
-- 	('Withdraw', 250000, 11),
-- 	('Withdraw', 300000, 12),
-- 	('Deposit', 250000, 13),
-- 	('Withdraw', 300000, 14),
-- 	('Deposit', 875000, 15)
-- RETURNING transaksi_id, jenis_transaksi, jumlah_transaksi, akun_id;
-- SELECT * FROM Transaksi;

-- untuk pembaruan saldo, pembaruan saldo ketika melakukan deposit
-- UPDATE Akun
-- SET saldo = saldo + CASE 
--     WHEN akun_id = 13 THEN 250000
--     WHEN akun_id = 14 THEN 875000
--     ELSE saldo -- jika akun_id tidak termasuk dalam daftar, saldo tetap
-- END
-- WHERE akun_id IN (13, 15)
-- RETURNING akun_id, saldo;

-- untuk pembaruan saldo, pembaruan saldo ketika melakukan witdhraw
-- UPDATE Akun
-- SET saldo = saldo - CASE 
--     WHEN akun_id = 11 THEN 250000
--     WHEN akun_id = 12 THEN 300000
-- 	WHEN akun_id = 15 THEN 300000
--     ELSE saldo
-- END
-- WHERE akun_id IN (11, 12, 15)
-- RETURNING akun_id, saldo;

-- INSERT INTO Transaksi (jenis_transaksi, jumlah_transaksi, akun_id) VALUES ('Deposit', 50000, 13);
-- UPDATE Akun
-- SET saldo = saldo + 50000
-- WHERE akun_id = 13
-- RETURNING akun_id, saldo;
-- SELECT a.akun_id, a.saldo FROM Akun a;

-- menghapus data nasabah
-- DELETE FROM Nasabah WHERE nasabah_id = 6;
-- SELECT * FROM Nasabah;

-- menampilkan nama dan saldo nasabah
-- SELECT 
-- 	n.nama, 
-- 	a.saldo
-- FROM Nasabah n
-- JOIN Akun a ON n.nasabah_id = a.nasabah_id;

-- menampilkan nama nasabah, jumlah seluruh uang transaksi nasabah, dan jumlah transaksi yang dilakukan nasabah
SELECT 
    n.nama,
	SUM(t.jumlah_transaksi),
    COUNT(t.transaksi_id)
FROM 
    Nasabah n
JOIN 
    Akun a ON n.nasabah_id = a.nasabah_id
JOIN 
    Transaksi t ON a.akun_id = t.akun_id
GROUP BY 
    n.nama;


