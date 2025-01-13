//caraousel
const slides = document.getElementById("carouselSlides");
const controls = document.querySelectorAll(".carousel__control");
let currentIndex = 0;
const slideCount = controls.length;

const updateSlidePosition = () => {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  controls.forEach((control, index) => {
    control.checked = index === currentIndex;
  });
};

const autoSlide = () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
};

let slideInterval = setInterval(autoSlide, 3000);

// Manual control via radio buttons
controls.forEach((control, index) => {
  control.addEventListener("click", () => {
    currentIndex = index;
    updateSlidePosition();

    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 3000);
  });
});

//Dashboard
 // Chart Persegi 1
 const ctx1 = document.getElementById('barChart1').getContext('2d');
 new Chart(ctx1, {
   type: 'bar',
   data: {
     labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei'],
     datasets: [{
       label: 'Tingkat Wisatawan',
       data: [75, 85, 95, 70, 80],
       backgroundColor: ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0', '#F44336'],
     }]
   },
   options: {
     responsive: true,
     plugins: {
       legend: { display: true },
     },
   }
 });
 
  // Chart Lingkaran
  const ctx3 = document.getElementById('doughnutChart').getContext('2d');
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Anak-Anak', 'Remaja','Dewasa','Lansia'],
      datasets: [{
        label: 'Tingkat Kesehatan',
        data: [50, 45,30,20],
        backgroundColor: ['#344CB7', '#FF9800','#D9DFC6','#FFEB00'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
    }
  });