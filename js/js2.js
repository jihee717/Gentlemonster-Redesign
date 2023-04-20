// let menu = document.querySelector("#menu-bars");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };

// let section1 = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header .navbar a");

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
//   console.log(section);

//   section1.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header .navbar a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };

// document.querySelector("#search-icon").onclick = () => {
//   document.querySelector("#search-form").classList.toggle("active");
// };

// document.querySelector("#close").onclick = () => {
//   document.querySelector("#search-form").classList.remove("active");
// };

// var swiper = new Swiper(".home-slider", {
//   spaceBetween: 100,
//   centeredSlides: true,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,
// });

const menu = [
  {
    id: 1,
    title: "Maison Margiela – MM002 01",
    category: "Maison Margiela",
    price: 550.0,
    img: "./img/sun-9.png",
    desc: `A statement piece from the Maison Margiela x Gentle Monster collection, the MM002 01 sunglasses feature an aviator silhouette structured from black acetate.`,
  },
  {
    id: 2,
    title: "Rococo KC6",
    category: "2023 Collection",
    price: 330.0,
    img: "./img/sun-3.png",
    desc: `Discover the Rococo KC6 sunglasses from Gentle Monster’s 2023 Collection. `,
  },
  {
    id: 3,
    title: "R.E.A.T PC5",
    category: "BOLD Collection",
    price: 370.0,
    img: "./img/sun-21.png",
    desc: `Discover the R.E.A.T PC5 sunglasses from Gentle Monster's BOLD collection, a collection inspired by the stars in the galaxy.`,
  },
  {
    id: 4,
    title: "Maison Margiela – MM002 W2",
    category: "Maison Margiela",
    price: 550.0,
    img: "./img/sun-10.png",
    desc: `
    A statement piece from the Maison Margiela x Gentle Monster collection, the MM002 W2 sunglasses feature an aviator silhouette structured from white acetate.`,
  },
  {
    id: 5,
    title: "Vis Viva 01",
    category: "2023 Collection",
    price: 340.0,
    img: "./img/sun-1.png",
    desc: `Discover the Vis Viva 01 sunglasses from Gentle Monster’s 2023 Collection.`,
  },
  {
    id: 6,
    title: "The Bell KC1",
    category: "BOLD Collection",
    price: 340.0,
    img: "./img/sun-23.png",
    desc: `Discover The Bell KC1 sunglasses from Gentle Monster's BOLD collection, a collection inspired by the stars in the galaxy.`,
  },
  {
    id: 7,
    title: "Maison Margiela – MM008 01",
    category: "Maison Margiela",
    price: 368.0,
    img: "./img/sun-26.png",
    desc: `The MM008 01 sunglasses feature a bold cat-eye silhouette structured from black acetate.`,
  },
  {
    id: 8,
    title: "Jeans GRC4",
    category: "2023 Collection",
    price: 289.0,
    img: "./img/sun-6.png",
    desc: `Discover the Jeans GRC4 sunglasses from Gentle Monster’s 2023 Collection `,
  },
  {
    id: 9,
    title: "Eve WC6",
    category: "BOLD Collection",
    price: 340.0,
    img: "./img/sun-22.png",
    desc: `Discover the Eve WC6 sunglasses from Gentle Monster's Bold collection, a collection inspired by the stars in the galaxy.`,
  },
  {
    id: 10,
    title: "Maison Margiela – MM008 W2",
    category: "Maison Margiela",
    price: 368.0,
    img: "./img/sun-27.png",
    desc: `The MM008 W2 sunglasses feature a bold cat-eye silhouette structured from white acetate.`,
  },
  {
    id: 11,
    title: "Hue 01",
    category: "2023 Collection",
    price: 289.0,
    img: "./img/sun-4.png",
    desc: `Discover the Hue 01 sunglasses from Gentle Monster’s 2023 Collection `,
  },
  {
    id: 12,
    title: "Oracle.S BR2",
    category: "BOLD Collection",
    price: 370.0,
    img: "./img/sun-8.png",
    desc: `Discover the Oracle.S BR2 sunglasses from Gentle Monster's BOLD collection, a collection inspired by the stars in the galaxy.`,
  },
  {
    id: 13,
    title: "Maison Margiela – MM004 G10",
    category: "Maison Margiela",
    price: 368.0,
    img: "./img/sun-12.png",
    desc: `The MM004 G10 sunglasses feature a butterfly silhouette structured from subtle gray acetate.`,
  },
  {
    id: 14,
    title: "Mass YC8",
    category: "2023 Collection",
    price: 330.0,
    img: "./img/sun-19.png",
    desc: `Discover the Mass YC8 sunglasses from Gentle Monster’s 2023 Collection`,
  },
  {
    id: 15,
    title: "Silver Clouds GRC3",
    category: "BOLD Collection",
    price: 370.0,
    img: "./img/sun-7.png",
    desc: `Discover the Silver Clouds GRC3 sunglasses from Gentle Monster's BOLD collection, a collection inspired by the stars in the galaxy.`,
  },
  {
    id: 16,
    title: "Maison Margiela – MM004 W2",
    category: "Maison Margiela",
    price: 368.0,
    img: "./img/sun-11.png",
    desc: `The MM004 W2 sunglasses feature a butterfly silhouette structured from white acetate.`,
  },
  {
    id: 17,
    title: "Cookie Y6",
    category: "2023 Collection",
    price: 300.0,
    img: "./img/sun-20.png",
    desc: `Discover the Cookie Y6 sunglasses from Gentle Monster’s 2023 Collection.`,
  },
  {
    id: 18,
    title: "Bandoneon.S PC5",
    category: "BOLD Collection",
    price: 330.0,
    img: "./img/sun-13.png",
    desc: `Discover the Bandoneon.S PC5 sunglasses from Gentle Monster's BOLD collection, a collection inspired by the stars in the galaxy.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//페이지 로드시 모든 아이템 보여주기
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item"><a href="product/${item.id}.html">
          <img src="${item.img}" alt="${item.category}" class="photo" />
          <div class="item-info">
              <div class="line">
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
              </div>
              <p class="item-text">${item.desc}</p>
          </div></a>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["View all"],
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category == category) {
          return menuItem;
        }
        // btn.classList.add("act");
        // btn.classList.remove("act");
      });
      if (category == "View all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
