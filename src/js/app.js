const Mini1 = document.querySelectorAll(".mini_js");
const Big_Img = document.querySelectorAll(".big_img0");

if (Mini1) {
  for (let index = 0; index < Mini1.length; index++) {
    const element10 = Mini1[index];

    element10.addEventListener("click", () => {
      console.log("kkkk");
      const element20 = Big_Img[index];

      element20.style.display = "block";

      if (Big_Img[index] == Big_Img[0]) {
        Big_Img[1].style.display = "none";
        Big_Img[2].style.display = "none";
        Big_Img[3].style.display = "none";
      }
      if (Big_Img[index] == Big_Img[1]) {
        Big_Img[0].style.display = "none";
        Big_Img[2].style.display = "none";
        Big_Img[3].style.display = "none";
      }
      if (Big_Img[index] == Big_Img[2]) {
        Big_Img[0].style.display = "none";
        Big_Img[1].style.display = "none";
        Big_Img[3].style.display = "none";
      }

      if (Big_Img[index] == Big_Img[3]) {
        Big_Img[0].style.display = "none";
        Big_Img[1].style.display = "none";
        Big_Img[2].style.display = "none";
      }
    });
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  spaceBetween: 10,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 43,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

const Menu_icon = document.querySelector(".icons");
const Mobile_data = document.querySelector(".mobile_next");
const close_item = document.querySelector(".close_icon");
const open_item = document.querySelector(".fa-bars");

Menu_icon.addEventListener("click", () => {
  Mobile_data.classList.toggle("active04");

  close_item.classList.toggle("active02");

  open_item.classList.toggle("active05");
});

const Main = document.querySelectorAll(".main");
const About = document.querySelectorAll(".about");

const icon_180 = document.querySelectorAll(".rotate_0");

if (Main) {
  for (let index = 0; index < Main.length; index++) {
    const element0 = Main[index];

    element0.addEventListener("click", () => {
      const element02 = About[index];
      const element03 = icon_180[index];

      element02.classList.toggle("active02");

      element03.classList.toggle("active03");
    });
  }
}

const btn_click = document.querySelectorAll(".book_click");
const btn_section = document.querySelector(".book_section");
const Close_click = document.querySelector(".close_book");

for (let index = 0; index < btn_click.length; index++) {
  const element = btn_click[index];
  element.addEventListener("click", () => {
    console.log("click");
    btn_section.style.display = "block";
  });
}

Close_click.addEventListener("click", () => {
  btn_section.style.display = "none";
});
