import type { Mahasiswa } from './types';
import { bungkusData } from './utils';

function App() {
  const namaAplikasi = import.meta.env.VITE_APP_NAME || 'Aplikasi Default';

  // Data 6 mahasiswa dengan id yang unik masing-masing
  const dataMahasiswaList: Mahasiswa[] = [
    {
      id: 1,
      nama: 'Ulya Mutiara',
      nim: '12345678',
      jurusan: 'Teknik Informatika',
      status: 'Aktif',
    },
    {
      id: 2,
      nama: 'Raka Rizki',
      nim: '87654321',
      jurusan: 'Teknik Komputer',
      status: 'Cuti',
    },
    {
      id: 3,
      nama: 'Siti Sarah',
      nim: '11223344',
      jurusan: 'Teknik Komputer',
      status: 'Aktif',
    },
    {
      id: 4,
      nama: 'Andi Pratama',
      nim: '55667788',
      jurusan: 'Teknik Komputer',
      status: 'Lulus',
    },
    {
      id: 5,
      nama: 'Dewi Lestari',
      nim: '99887766',
      jurusan: 'Teknik Informatika',
      status: 'Aktif',
    },
    {
      id: 6, // <-- Diubah dari 5 menjadi 6 agar unik
      nama: 'Lovia Gindha',
      nim: '10887963',
      jurusan: 'Teknik Informatika',
      status: 'Aktif',
    },
  ];

  // Membungkus data list mahasiswa menggunakan fungsi generic
  const hasilGeneric = bungkusData<Mahasiswa[]>(
    dataMahasiswaList, 
    'Berhasil Memuat 6 Data Mahasiswa!'
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)', 
      padding: '40px 20px', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
    }}>
      <div style={{ maxWidth: '650px', margin: '0 auto' }}>
        
        {/* Header Aesthetic */}
        <header style={{ marginBottom: '25px', textAlign: 'center' }}>
          <h1 style={{ 
            color: '#1e3a8a', 
            fontSize: '28px', 
            fontWeight: '700', 
            margin: '0 0 6px 0',
            letterSpacing: '-0.5px'
          }}>
            {namaAplikasi}
          </h1>
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
            Dashboard Manajemen Data Mahasiswa 
          </p>
        </header>
        
        {/* Card Container dengan Soft Shadow & Rounded */}
        <div style={{ 
          background: '#ffffff', 
          padding: '30px', 
          borderRadius: '16px', 
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f3f4f6'
        }}>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            background: '#f8fafc',
            padding: '12px 16px',
            borderRadius: '10px',
            marginBottom: '20px',
            fontSize: '14px',
            color: '#475569'
          }}>
            <div><strong>Pesan:</strong> {hasilGeneric.pesan}</div>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>{hasilGeneric.waktu}</div>
          </div>

          <h3 style={{ 
            margin: '0 0 15px 0', 
            fontSize: '16px', 
            color: '#334155',
            fontWeight: '600',
            borderBottom: '2px solid #f1f5f9',
            paddingBottom: '8px'
          }}>
            Daftar Mahasiswa (Generic Payload):
          </h3>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {hasilGeneric.payload.map((mhs) => {
              // Pengaturan warna badge berdasarkan status
              const statusBg = 
                mhs.status === 'Cuti' ? '#fee2e2' : 
                mhs.status === 'Lulus' ? '#e0f2fe' : '#dcfce7';
              const statusColor = 
                mhs.status === 'Cuti' ? '#991b1b' : 
                mhs.status === 'Lulus' ? '#0369a1' : '#166534';

              return (
                <li key={mhs.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '12px 14px',
                  marginBottom: '10px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                }}>
                  <div>
                    <strong style={{ color: '#1e293b', fontSize: '15px' }}>{mhs.nama}</strong>
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
                      NIM: {mhs.nim} &bull; {mhs.jurusan}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <span style={{ 
                    backgroundColor: statusBg, 
                    color: statusColor, 
                    padding: '4px 10px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: '600',
                    letterSpacing: '0.3px'
                  }}>
                    {mhs.status}
                  </span>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default App;