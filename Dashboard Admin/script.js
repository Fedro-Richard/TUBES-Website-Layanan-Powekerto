 // Revenue Chart
 const revenueCtx = document.getElementById('revenueChart').getContext('2d');
 const revenueChart = new Chart(revenueCtx, {
     type: 'bar',
     data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         datasets: [{
             label: 'Revenue',
             data: [20000, 25000, 30000, 28000, 32000, 50000, 40000, 45000, 35000, 38000, 42000, 48000],
             backgroundColor: 'rgba(54, 162, 235, 0.6)',
             borderColor: 'rgba(54, 162, 235, 1)',
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });

 // Team Performance Chart
 const teamCtx = document.getElementById('teamPerformanceChart').getContext('2d');
 const teamChart = new Chart(teamCtx, {
     type: 'line',
     data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         datasets: [{
             label: 'Performance',
             data: [80, 85, 88, 90, 92, 95, 97, 94, 91, 89, 93, 96],
             backgroundColor: 'rgba(255, 206, 86, 0.2)',
             borderColor: 'rgba(255, 206, 86, 1)',
             borderWidth: 2
         }]
     },
     options: {
         responsive: true,
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });