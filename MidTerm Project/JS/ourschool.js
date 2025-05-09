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

const images = [
  {
    src: "Images/image8.avif",
    text: "Sola Gratia School offers a beautiful environment that supports a comfortable learning process. Surrounded by green parks, wide open spaces, and fresh air, students can learn more focused and calmly. We believe that a comfortable and healthy atmosphere helps children develop optimally, both academically and socially.",
  },
  {
    src: "Images/image9.avif",
    text: "We provides complete sports facilities such as basketball courts, volleyball, futsal, and gymnastics areas. We encourage students to be active, healthy, and enthusiastic through regular physical activities. These facilities support character building, teamwork, and a healthy lifestyle from an early age.",
  },
  {
    src: "Images/image10.jpg",
    text: "Our library is designed with a natural feel, complete with plants and small trees that are refreshing. Students can study quietly in comfortable, bright, and neatly arranged reading rooms. This environment supports concentration, a sense of comfort, and a high interest in reading from an early age.",
  },
  {
    src: "Images/image11.jpg",
    text: "We encourage the creation of a creative and interactive classroom atmosphere. Teachers design interesting activities such as group discussions, art projects, and simple experiments. Students are trained to think critically, actively, and confidently. The learning process becomes fun, meaningful, and triggers a spirit of exploration.",
  },
  {
    src: "Images/image12.jpg",
    text: "Sola Gratia School Cafeteria serves clean, nutritious, and delicious food for all students every day, at no additional cost. The menu is prepared by a nutritionist and served in a hygienic environment. We believe that healthy intake is very important to support children's focus and optimal growth.",
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
