import type { Mahasiswa } from './types';
import { bungkusData } from './utils';

function App() {
  // Data mahasiswa tunggal untuk diuji dengan fungsi generic
  const dataMhs: Mahasiswa = {
    id: 1,
    nama: 'Budi Santoso',
    nim: '12345678',
    jurusan: 'Teknik Informatika',
    status: 'Aktif',
  };

  // Memanggil fungsi generic bungkusData dengan tipe Mahasiswa
  const hasilGeneric = bungkusData<Mahasiswa>(dataMhs, 'Data Mahasiswa Berhasil Dimuat Menggunakan Generic!');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Tugas Praktikum - Langkah 03</h1>
      <h2>Implementasi Fungsi Generic</h2>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '450px', marginTop: '15px' }}>
        <p><strong>Pesan:</strong> {hasilGeneric.pesan}</p>
        <p><strong>Waktu:</strong> {hasilGeneric.waktu}</p>
        <hr />
        <h3>Payload Data Mahasiswa:</h3>
        <p><strong>Nama:</strong> {hasilGeneric.payload.nama}</p>
        <p><strong>NIM:</strong> {hasilGeneric.payload.nim}</p>
        <p><strong>Jurusan:</strong> {hasilGeneric.payload.jurusan}</p>
        <p><strong>Status:</strong> <em>{hasilGeneric.payload.status}</em></p>
      </div>
    </div>
  );
}

export default App;