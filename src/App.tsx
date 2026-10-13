import type { Mahasiswa } from './types';

function App() {
  const dataMahasiswa: Mahasiswa[] = [
    {
      id: 1,
      nama: 'Budi Santoso',
      nim: '12345678',
      jurusan: 'Teknik Informatika',
      status: 'Aktif',
    },
    {
      id: 2,
      nama: 'Siti Aminah',
      nim: '87654321',
      jurusan: 'Sistem Informasi',
      status: 'Cuti',
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Daftar Mahasiswa</h1>
      <ul>
        {dataMahasiswa.map((mhs) => (
          <li key={mhs.id}>
            <strong>{mhs.nama}</strong> ({mhs.nim}) - {mhs.jurusan} | Status:{' '}
            <em>{mhs.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;