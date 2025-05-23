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
  "Images/image1.avif",
  "Images/image2.avif",
  "Images/image3.avif",
];

let currentImageIndex = 0;

const heroSection = document.querySelector(".hero");

// Function untuk ganti gambar
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

const images = [
  {
    src: "Images/image5.avif",
    text: "Our teachers guide students toward truth, knowledge, and growth in faith. With love, they help students discover their God-given potential. Our teachers create a safe, supportive, Christ-centered learning environment. They build partnerships with parents to ensure students grow academically and spiritually. Through their lifelong role models, our teachers prepare students to be faithful leaders who impact the world.",
  },
  {
    src: "Images/image6.jpg",
    text: "Cooperation between parents and teachers is essential to support the optimal development of students. Parents provide the foundation of character education at home, while teachers reinforce it through learning at school. With good communication, children's needs and potential can be identified and developed together. This collaboration creates a consistent and supportive learning environment for children. Through strong synergy, students grow into confident, independent, and high-achieving individuals.",
  },
  {
    src: "Images/image7.jpg",
    text: "Our students are individuals who are formed with faith, character, and love for the truth. They are equipped with knowledge, skills, and Christian values ​​to face the world. We hope that after graduation, they will become leaders who serve with love and integrity. With strong faith, they are ready to change the world according to God's calling on their lives.",
  },
];

let currentSlide = 0;

function changeSlide(index) {
  currentSlide = index;
  document.getElementById("carousel-image").src = images[index].src;
  document.getElementById("carousel-text").textContent = images[index].text;

  // Update the active dot
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Set initial active dot
changeSlide(0);
