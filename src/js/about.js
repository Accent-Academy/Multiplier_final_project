const firstss = document.querySelectorAll(".total");
const secondss = document.querySelectorAll(".second");
const Img_rotate = document.querySelectorAll(".img_rotate");

console.log(firstss);

if (firstss) {
  for (let index = 0; index < firstss.length; index++) {
    const element = firstss[index];
    element.addEventListener("click", (e) => {
      const element2 = secondss[index];
      const element3 = Img_rotate[index];
      console.log(element2);

      element2.classList.toggle("active0");
      element3.classList.toggle("active_img");
    });
  }
}
