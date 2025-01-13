// report.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('satisfaction-form');
    const satisfactionSelect = document.getElementById('satisfaction');
    const formMessage = document.getElementById('form-message');
    const ctx = document.getElementById('satisfaction-chart').getContext('2d');

  
    let satisfactionData = JSON.parse(localStorage.getItem('satisfactionData')) || {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

   
    const saveData = () => {
        localStorage.setItem('satisfactionData', JSON.stringify(satisfactionData));
    };

   
    const updateChart = (chart) => {
        chart.data.datasets[0].data = [
            satisfactionData[1],
            satisfactionData[2],
            satisfactionData[3],
            satisfactionData[4],
            satisfactionData[5]
        ];
        chart.update();
    };

   
    const satisfactionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1 - Sangat Tidak Puas', '2 - Tidak Puas', '3 - Netral', '4 - Puas', '5 - Sangat Puas'],
            datasets: [{
                label: 'Jumlah Respon',
                data: [
                    satisfactionData[1],
                    satisfactionData[2],
                    satisfactionData[3],
                    satisfactionData[4],
                    satisfactionData[5]
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', 
                    'rgba(54, 162, 235, 0.2)', 
                    'rgba(255, 206, 86, 0.2)', 
                    'rgba(75, 192, 192, 0.2)', 
                    'rgba(153, 102, 255, 0.2)'  
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', 
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)', 
                    'rgba(75, 192, 192, 1)', 
                    'rgba(153, 102, 255, 1)' 
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    precision: 0
                }
            }
        }
    });

    // Event listener untuk form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedValue = parseInt(satisfactionSelect.value);
        if (selectedValue >= 1 && selectedValue <= 5) {
            satisfactionData[selectedValue]++;
            saveData();
            updateChart(satisfactionChart);
            formMessage.textContent = 'Terima kasih atas feedback Anda!';
            formMessage.classList.remove('text-red-500');
            formMessage.classList.add('text-green-500');
            form.reset();
        } else {
            formMessage.textContent = 'Mohon pilih tingkat kepuasan.';
            formMessage.classList.remove('text-green-500');
            formMessage.classList.add('text-red-500');
        }

        // Hilangkan pesan setelah 3 detik
        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    });
});
