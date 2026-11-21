export default defineEventHandler(() => {
  // ganti dengan query Supabase
  return {
    status: 'success',
    data: [
      { id: 1, nama: 'Data Contoh 1', status: 'Tersedia' },
      { id: 2, nama: 'Data Contoh 2', status: 'Dipakai' }
    ]
  }
})