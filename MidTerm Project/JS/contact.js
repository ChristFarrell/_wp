//Toggle Hamburger Menu
const navBarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navBarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navBarNav.contains(e.target)) {
    navBarNav.classList.remove("active");
  }
});

const heroImages = [
  "Images/Contact1.jpg",
  "Images/Contact2.jpg",
  "Images/Contact3.jpg",
];

let currentImageIndex = 0;

const heroSection = document.querySelector(".hero");

function changeHeroImage(index) {
  heroSection.style.backgroundImage = `url('${heroImages[index]}')`;
}

// Tombol kontrol (kalau mau pakai tombol next/prev)
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function nextSlide() {
  currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  changeHeroImage(currentImageIndex);
}

function prevSlide() {
  currentImageIndex =
    (currentImageIndex - 1 + heroImages.length) % heroImages.length;
  changeHeroImage(currentImageIndex);
}

// Validate form fields before sending
function validateForm() {
  const name = document.getElementById("user").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("telephone").value.trim();

  const namePattern = /^[\p{L}\s'.-]+$/u;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]+$/;

  if (!name || !email || !phone) {
    alert("Please fill in all required fields.");
    return false;
  }

  if (!namePattern.test(name)) {
    alert("Please enter a valid name.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!phonePattern.test(phone)) {
    alert("Phone number must contain digits only.");
    return false;
  }

  return true;
}

feather.replace();

const form = document.getElementById("SchoolForm");
const submitBtn = document.getElementById("submit-btn");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxK1hZTN6ZNGCL9vLZNsEubcN2pRQEwU3eCdzkbJ_2mDM9OcKJpEji1s12iTDYXPKo/exec"; // Ganti dengan URL kamu

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Jangan reload halaman

  if (!validateForm()) {
    return; // Hentikan proses jika validasi gagal
  }

  // Mulai loading
  submitBtn.classList.add("loading");
  submitBtn.innerHTML = '<i data-feather="loader" class="spin"></i> Sending...';
  feather.replace();

  // Kirim data ke Google Sheets
  const formData = new FormData(form);
  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => {
      submitBtn.classList.remove("loading");
      submitBtn.classList.add("success");
      submitBtn.innerHTML = '<i data-feather="check"></i>';
      feather.replace();

      form.reset();

      setTimeout(() => {
        submitBtn.classList.remove("success");
        submitBtn.innerHTML = "Send Message";
      }, 2000);
    })
    .catch((error) => {
      submitBtn.classList.remove("loading");
      submitBtn.innerHTML = "Send Message";
      alert("Message delivery failed. Please try again.");
      console.error("Error!", error.message);
    });
});
