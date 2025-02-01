class FloatingShape {
  constructor(type) {
    this.element = document.createElement("div");
    this.element.className = `floating-shape ${type}`;

    // Set posisi awal secara acak
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * document.body.scrollHeight;

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    document.getElementById("shape-container").appendChild(this.element);

    // Set arah gerakan acak
    this.speedX = (Math.random() - 0.5) * 2; // Kecepatan X antara -1 dan 1
    this.speedY = (Math.random() - 0.5) * 2; // Kecepatan Y antara -1 dan 1

    this.animate();
  }

  animate() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Jika shape menyentuh batas layar, pantulkan
    if (this.x <= 0 || this.x >= window.innerWidth) this.speedX *= -1;
    if (this.y <= 0 || this.y >= document.body.scrollHeight) this.speedY *= -1;

    // Terapkan posisi dan efek animasi
    this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;

    requestAnimationFrame(() => this.animate());
  }
}

// Generate beberapa shape dari setiap tipe
window.addEventListener("DOMContentLoaded", () => {
  const shapes = []; // Menyimpan objek yang dibuat

  ["triangle", "circle", "square"].forEach((shape) => {
    for (let i = 0; i < 8; i++) {
      shapes.push(new FloatingShape(shape)); // Simpan ke dalam array
    }
  });

  console.log(shapes); // Debugging, bisa dihapus jika tidak diperlukan
});
const self = this; // Simpan referensi this

document.getElementById("cekButton").addEventListener("click", function () {
  this.innerHTML = "✔";
  this.classList.add("checked"); // Tambahkan efek perubahan
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah halaman refresh
  document.getElementById("overlay").style.display = "flex"; // Tampilkan overlay
});

function closePopup() {
  document.getElementById("overlay").style.display = "none"; // Sembunyikan overlay
  location.reload(); // Refresh halaman setelah pop-up ditutup
}
function openPopup() {
  document.getElementById("overlay").style.display = "flex";
}
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".judul");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show1");
    }, index * 500); // Delay antar elemen
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".subjudul");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show2");
    }, index * 500); // Delay antar elemen
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".h1");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show3");
    }, index * 500); // Delay antar elemen
  });
});
