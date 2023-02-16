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
