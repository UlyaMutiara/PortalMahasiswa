// Fungsi generic sederhana untuk membungkus data apa saja
export function bungkusData<T>(data: T, pesan: string) {
  return {
    pesan: pesan,
    payload: data,
    waktu: new Date().toLocaleTimeString(),
  };
}