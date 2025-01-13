const ctx = document.getElementById('indicatorChart').getContext('2d');

const data = {
  labels: ['Mar 29', 'Mar 31', 'Apr 2', 'Apr 4', 'Apr 6', 'Apr 8', 'Apr 10', 'Apr 12', 'Apr 14', 'Apr 16', 'Apr 18', 'Apr 20', 'Apr 22', 'Today'],
  datasets: [
    {
      label: 'Suka',
      data: [2, 4, 3, 6, 8, 5, 12, 15, 8, 7, 6, 10, 5, 8],
      backgroundColor: '#3b82f6', // Warna Merah
    },
    {
      label: 'Tidak Suka',
      data: [1, 3, 2, 4, 6, 4, 10, 12, 6, 5, 4, 8, 3, 6],
      backgroundColor: '#ef4444', // Warna Biru
    },
    {
      label: 'Biasa Saja',
      data: [5, 8, 6, 10, 15, 12, 18, 20, 12, 10, 8, 15, 10, 12],
      backgroundColor: '#6b7280', // Warna Abu-abu
    },
  ],
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#ffffff',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: '#374151' },
      },
    },
  },
};

new Chart(ctx, config);

// Contoh data jumlah feedback hari ini
const feedbackCount = 25; // Angka ini dapat diubah secara dinamis dari backend atau API.

// Menampilkan jumlah feedback di dalam box kedua
document.getElementById('feedbackCount').textContent = feedbackCount;
