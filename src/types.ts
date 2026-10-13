// 1. Union Type untuk Status Mahasiswa
export type StatusMahasiswa = 'Aktif' | 'Cuti' | 'Lulus' ;

// 2. Interface untuk Struktur Data Mahasiswa
export interface Mahasiswa {
  id: number;
  nama: string;
  nim: string;
  jurusan: string;
  status: StatusMahasiswa; // Memakai union type yang sudah dibuat
}