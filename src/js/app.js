// const Mini=document.querySelectorAll(".mini")
// const Big_Img=document.querySelectorAll(".big_img")

// if(Mini){
//     for (let index = 0; index < Mini.length; index++) {
//         const element =Mini[index];

//         element.addEventListener("click",()=>{

//             console.log("sdfdf");

//             const element2=Big_Img[index];
//             element2.style.display="block"

//             if (Big_Img[index]==Big_Img[0]) {
//                 Big_Img[1].style.display="none"
//                 Big_Img[2].style.display="none"
//                 Big_Img[3].style.display="none"

//             }
//             if (Big_Img[index]==Big_Img[1]) {
//                 Big_Img[0].style.display="none"
//                 Big_Img[2].style.display="none"
//                 Big_Img[3].style.display="none"

//             }
//             if (Big_Img[index]==Big_Img[2]) {
//                 Big_Img[0].style.display="none"
//                 Big_Img[1].style.display="none"
//                 Big_Img[3].style.display="none"

//             }

//             if (Big_Img[index]==Big_Img[3]) {
//                 Big_Img[0].style.display="none"
//                 Big_Img[1].style.display="none"
//                 Big_Img[2].style.display="none"

//             }

//         })

//     }
// }

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
