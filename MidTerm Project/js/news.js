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

const heroSlides = [
  {
    image: "Images/mainnews1.jpg",
    title: "Our News and Information",
    subtitle: "Sola Gratia School",
  },
  {
    image: "Images/mainnews2.jpg",
    title: "Sola Gratia School Admission 2025",
    subtitle: "Let's join with us!",
  },
];

let currentImageIndex = 0;

const heroSection = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero .content h1");
const heroSubtitle = document.querySelector(".hero .content h2");

function changeHeroSlide(index) {
  const slide = heroSlides[index];
  heroSection.style.backgroundImage = `url('${slide.image}')`;
  heroTitle.textContent = slide.title;
  heroSubtitle.textContent = slide.subtitle;
}

function nextSlide() {
  currentImageIndex = (currentImageIndex + 1) % heroSlides.length;
  changeHeroSlide(currentImageIndex);
}

function prevSlide() {
  currentImageIndex =
    (currentImageIndex - 1 + heroSlides.length) % heroSlides.length;
  changeHeroSlide(currentImageIndex);
}

changeHeroSlide(currentImageIndex);

// news.js
const newsData = {
  news5: {
    title:
      "Sola Gratia Establishes Strategic Cooperation with Local Government",
    date: "2 May 2025 on 4:35 PM",
    image: "Images/news5.jpg",
    author: "Mudi Kamal",
  },
  news4: {
    title: "Campus Visit Inspires Sola Gratia Students",
    date: "25 April 2025 on 2:03 PM",
    image: "Images/news4.jpg",
    author: "Adnan Yepa",
  },
  news3: {
    title: "Sola Gratia Students Win Science Fair Awards",
    date: "18 April 2025 on 10:19 AM",
    image: "Images/news3.jpg",
    author: "Edward Widyaya",
  },
  news2: {
    title: "Sola Gratia Celebrates Joyful 30th Anniversary",
    date: "15 Maret 2025 on 10:57 AM",
    image: "Images/news2.png",
    author: "Keva Wudi",
  },
  news1: {
    title: "Sola Gratia Welcomes Lunar New Year with Cultural Spirit",
    date: "3 February 2025 on 8:20 AM",
    image: "Images/news1.jpg",
    author: "Jaka Petra",
  },
};

// Judul berita
document.querySelectorAll(".news-title").forEach((el) => {
  const id = el.dataset.id;
  if (newsData[id]) {
    el.textContent = newsData[id].title;
  }
});

// Tanggal post
document.querySelectorAll(".post-time").forEach((el) => {
  const id = el.dataset.id;
  if (newsData[id]) {
    el.textContent = newsData[id].date;
  }
});

document.querySelectorAll("img.news-image").forEach((img) => {
  const id = img.dataset.id;
  if (newsData[id]) {
    img.src = newsData[id].image;
  }
});

document.querySelectorAll(".news-author").forEach((el) => {
  const id = el.dataset.id;
  if (newsData[id]) {
    el.textContent = `By: ${newsData[id].author}`;
  }
});

const anonymousInput = document.querySelector(".anonymous-input");
const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector("#comment-list");

function checkInputs() {
  const name = anonymousInput.value.trim();
  const comment = userComment.value.trim();

  if (name !== "" && comment !== "") {
    publishBtn.removeAttribute("disabled");
    publishBtn.classList.add("able");
  } else {
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("able");
  }
}

userComment.addEventListener("input", checkInputs);
anonymousInput.addEventListener("input", checkInputs);

const UserId = {
  name: "",
  message: "",
  date: "",
};

function addComment() {
  UserId.name = anonymousInput.value;
  UserId.message = userComment.value;
  UserId.date = new Date().toLocaleString();

  let publishedComment = `
  <div class="parent">
    <i data-feather="user"></i>
    <div>
      <h3>${UserId.name}</h3>
      <p>${UserId.message}</p>
      <span>${UserId.date}</span>
    </div>
  </div>
`;

  comments.innerHTML += publishedComment;
  feather.replace();
  localStorage.setItem("comments", comments.innerHTML);
  (userComment.value = ""), (anonymousInput.value = "Anonymous");

  let counts = document.querySelectorAll(".parent").length;
  document.getElementById("comment-count").textContent = counts;
}

publishBtn.addEventListener("click", addComment);

window.addEventListener("DOMContentLoaded", (e) => {
  comments.innerHTML = localStorage.getItem("comments");

  let counts = document.querySelectorAll(".parent").length;
  document.getElementById("comment-count").textContent = counts;
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("comment-input").value = "";
  document.getElementById("name-input").value = "";
  document.querySelector(".anonymous-input").value = "Anonymous";
});
