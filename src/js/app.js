const Mini = document.querySelectorAll(".mini");
const Big_Img = document.querySelectorAll(".big_img0");

if (Mini) {
  for (let index = 0; index < Mini.length; index++) {
    const element = Mini[index];

    element.addEventListener("click", () => {
      const element2 = Big_Img[index];

      element2.style.opacity = "1";

      // const element2=Big_Img[index];

      // if (Big_Img[index]==Big_Img[0]) {
      //     Big_Img[1].style.display="none"
      //     Big_Img[2].style.display="none"
      //     Big_Img[3].style.display="none"

      // }
      // if (Big_Img[index]==Big_Img[1]) {
      //     Big_Img[0].style.display="none"
      //     Big_Img[2].style.display="none"
      //     Big_Img[3].style.display="none"

      // }
      // if (Big_Img[index]==Big_Img[2]) {
      //     Big_Img[0].style.display="none"
      //     Big_Img[1].style.display="none"
      //     Big_Img[3].style.display="none"

      // }

      // if (Big_Img[index]==Big_Img[3]) {
      //     Big_Img[0].style.display="none"
      //     Big_Img[1].style.display="none"
      //     Big_Img[2].style.display="none"

      // }
    });
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 50,
  loop: true,
  speed: 1000,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    991: {
      slidesPerView: 4,
      spaceBetween: 50,
    },

    748: {
      slidesPerGroup: 2,
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// // const Menu_icon=document.querySelector(".icons")
// // const Mobile_data=document.querySelector(".mobile_next")

// // Menu_icon.addEventListener("click",()=>{
// //   Mobile_data.style.transform="translate(0px)"

// // })

// const Main=document.querySelectorAll(".main")
// const About=document.querySelectorAll(".about")

// if(Main){
//      for (let index = 0; index < Main.length; index++) {
//         const element =Main[index];

//         element.addEventListener("click",()=>{

//             const element2=About[index];

//             element2.classList.toggle("active2")

//             element2.style.display="block"

//             // if (About[index]==About[0]) {
//             //     About[1].style.display="none"
//             //     About[2].style.display="none"

//             // }
//             // if (About[index]==About[1]) {
//             //     About[0].style.display="none"
//             //     About[2].style.display="none"

//             // }
//             // if (About[index]==About[2]) {
//             //     About[0].style.display="none"
//             //     About[1].style.display="none"

//             // }

//         })

//    }
// }
