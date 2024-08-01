// *********************************************
//     creating a portfolio tabbed component
// ********************************************

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  //   to find the number in the attribute
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// swiper js code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// scroll to top button
const heroSection = document.querySelector(".section-hero");
const footerElement = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElement.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

// animate number of scroll

const counterNum = document.querySelectorAll(".counter-number");
const speed = 200;
counterNum.forEach((currElem) => {
  const updateNumber = () => {
    const targetNUm = parseInt(currElem.dataset.number);
    // console.log(transferNum);
    const initialNum = parseInt(currElem.innerText);
    // console.log(initialNum);
    const incrementNum = Math.trunc(targetNUm / speed);
    // console.log(incrementNum);.

    if (initialNum < targetNUm) {
      currElem.innerText = `${initialNum + incrementNum}+`;

      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
});
// 5:43
