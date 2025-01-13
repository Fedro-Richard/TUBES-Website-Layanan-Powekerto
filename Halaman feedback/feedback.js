function handleSubmit(event) {
    event.preventDefault(); // Mencegah submit default form
    alert("Terima kasih atas feedback Anda!");
    window.location.href = "/Halaman feedback/indikatorfeedback.html"; // Ganti dengan URL halaman home Anda
}