let signUp = document.querySelector(".sign-up");
let login = document.querySelector(".login");
let menu = document.querySelector(".menu-btn");
let logoImg = document.querySelector(".logoimg");
let openMenu = document.querySelector(".openmenu");
let creators = document.querySelector(".creators");
let creatorCards = document.querySelector(".cards-creator");
let actorCards = document.querySelector(".cards");
let actors = document.querySelector(".actor");
let search = document.querySelector(".search");
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  const menuBtn = event.target.closest(".active");
  if (!menuBtn) {
    menu.src = "img/menu.svg";
    openMenu.classList.remove("open");
    document.body.style.overflow = "";
  } else {
    menu.src = "img/menu2.svg";
    openMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  }
});
search.addEventListener("click", () => {
  search.classList.toggle("active");
  const menuBtn = event.target.closest(".active");
  if (!menuBtn) {
    menu.src = "img/menu.svg";
    openMenu.classList.remove("open");
    document.body.style.overflow = "";
  } else {
    menu.src = "img/menu2.svg";
    openMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  }
});
logoImg.addEventListener("click", () => {
  const logo = event.target.closest(".logo");
  if (logo) {
    menu.src = "img/menu.svg";
    menu.classList.remove("active");
    openMenu.classList.remove("open");
    document.body.style.overflow = "";
  }
});
creators.addEventListener("click", () => {
  creatorCards.style.display = "flex";
  actorCards.style.display = "none";
  creators.id = "used";
  actors.id = "";
});
actors.addEventListener("click", () => {
  creatorCards.style.display = "none";
  actorCards.style.display = "flex";
  creators.id = "";
  actors.id = "used";
});

var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 25,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
      slidesOffsetAfter: 50,
      navigation: {
        nextEl: ".button-next",
      },
    },
  },
});
