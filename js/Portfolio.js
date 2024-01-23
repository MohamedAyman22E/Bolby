const navLinks = document.querySelectorAll(".nav_item");
function linkAction() {
  const menu = document.querySelector(".nav_list");
  menu.classList.remove("active");
}
navLinks.forEach(n => n.addEventListener("click", linkAction));
////////////
let navList = document.querySelectorAll(".nav_menu .nav_list  li a");
let section = document.querySelectorAll("section");
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY,
      offset = sec.offsetTop - 80,
      height = sec.offsetHeight,
      id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      document
        .querySelector(".nav_menu .nav_list  li a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_menu .nav_list  li a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
};
// // nav
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("active", window.scrollY > 1);
});

// // navList in small screen
let openList = document.querySelector("#nav_toggle");
let nav_list = document.querySelector(".nav_list");
let colsList = document.querySelector(".fa-xmark ");

openList.addEventListener("click", () => {
  nav_list.classList.add("active");
});
colsList.addEventListener("click", () => {
  nav_list.classList.remove("active");
});

// // filter portfolio
let allBtn = document.querySelectorAll(".portfolio_filter_inner button");
let PortfolioItems = document.querySelectorAll(".protfolio_item");
allBtn.forEach(e => {
  e.addEventListener("click", () => {
    allBtn.forEach(ele => {
      ele.classList.remove("active");
      e.classList.add("active");
      const filterValue = e.getAttribute("data-filter");
      PortfolioItems.forEach(pro => {
        if (filterValue === pro.getAttribute("data-category")) {
          pro.classList.remove("hide");
          pro.classList.add("show");
        } else {
          pro.classList.add("hide");
          pro.classList.remove("show");
        }
        if (filterValue === "all") {
          pro.classList.add("show");
        }
      });
    });
  });
});

// // swiper
var swiper = new Swiper(".mySwiper", {
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
  },
});
// //////////////////////////////////////////// customize
let theme_button = document.getElementById("theme_button");
let customize_theme = document.querySelector(".customize_theme");
let root = document.querySelector(":root");
let backgroundSpan = document.querySelectorAll(".choose_bg .back");
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
let bg1 = document.querySelector(".bg-1");
let bg2 = document.querySelector(".bg-2");
let bg3 = document.querySelector(".bg-3");
theme_button.addEventListener("click", () => {
  customize_theme.classList.add("active");
});
customize_theme.addEventListener("click", e => {
  if (e.target.classList.contains("customize_theme")) {
    customize_theme.classList.remove("active");
  }
});
// size
let fontSizeSpan = document.querySelectorAll(".choose-size span");
for (let i = 0; i < fontSizeSpan.length; i++) {
  fontSizeSpan[i].addEventListener("click", () => {
    for (let x = 0; x < fontSizeSpan.length; x++) {
      fontSizeSpan[x].classList.remove("active");
      fontSizeSpan[i].classList.add("active");
    }
    let fontSize;
    if (fontSizeSpan[i].classList.contains("font-size1")) {
      fontSize = "12px";
    } else if (fontSizeSpan[i].classList.contains("font-size2")) {
      fontSize = "14px";
    } else if (fontSizeSpan[i].classList.contains("font-size3")) {
      fontSize = "16px";
    } else if (fontSizeSpan[i].classList.contains("font-size4")) {
      fontSize = "18px";
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
}
// // // color
let colorSpan = document.querySelectorAll(".choose-color span");

for (let i = 0; i < colorSpan.length; i++) {
  colorSpan[i].addEventListener("click", () => {
    for (let x = 0; x < colorSpan.length; x++) {
      colorSpan[x].classList.remove("active");
      colorSpan[i].classList.add("active");
    }
    let primaryHue;
    if (colorSpan[i].classList.contains("color-1")) {
      primaryHue = 252;
    } else if (colorSpan[i].classList.contains("color-2")) {
      primaryHue = 52;
    } else if (colorSpan[i].classList.contains("color-3")) {
      primaryHue = 352;
    } else if (colorSpan[i].classList.contains("color-4")) {
      primaryHue = 152;
    } else if (colorSpan[i].classList.contains("color-5")) {
      primaryHue = 202;
    }
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
  window.localStorage.setItem("backgroundColor", "#000");
}
// // // background
const changeBg = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};
bg1.addEventListener("click", () => {
  bg2.classList.remove("active");
  bg1.classList.add("active");
  bg3.classList.remove("active");
  window.location.reload();
});
bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";
  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});
bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";
  bg2.classList.remove("active");
  bg1.classList.remove("active");
  bg3.classList.add("active");
  changeBg();
});
