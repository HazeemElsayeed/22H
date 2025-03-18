"use strict";
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const announcementBar = document.querySelector(".announcement-bar");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const collection = document.querySelector(".collection");
const modal = document.querySelector(".modal--sign-up");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".open-sign-up--modal");
///////////////////////////////////////

/////////////////////////////////
// Button Scroll
btnScrollTo.addEventListener("click", function (e) {
  collection.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Sticky navigation: Intersection Observer API
const navHeight = nav.offsetHeight;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
function changeQuantity(change, boxId) {
  var quantityInput = document.getElementById(boxId);
  var currentQuantity = parseInt(quantityInput.value);
  var newQuantity = currentQuantity + change;

  if (newQuantity < 1) {
    newQuantity = 1;
  }

  quantityInput.value = newQuantity;
}

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Product card
const productCards = document.querySelectorAll(".product-card");
const productModal = document.querySelector(".product-modal");
const productOverlay = document.querySelector(".product-overlay");
const modalImage = document.querySelector(".product-modal-image");
const modalName = document.querySelector(".product-modal-name");
const modalPrice = document.querySelector(".product-modal-price");
const productCloseModal = document.querySelector(".product-close-modal ");
const colorSelectors = document.querySelectorAll(".product-color input");

let currentProductImages = {};

const productImages = {
  "Product 1": {
    black: "img/cards/Product1-Black.webp",
    white: "img/cards/Product1-White.webp",
    beige: "img/cards/Product1-Beige.webp",
  },
  "Product 2": {
    black: "img/cards/Product2-Black.webp",
    white: "img/cards/Product2-White.webp",
    beige: "img/cards/Product2-Beige.webp",
  },
  "Product 3": {
    black: "img/cards/Product3-Black.webp",
    white: "img/cards/Product3-White.webp",
    beige: "img/cards/Product3-Beige.webp",
  },
  "Product 4": {
    black: "img/cards/Product4-Black.webp",
    white: "img/cards/Product4-White.webp",
    beige: "img/cards/Product4-Beige.webp",
  },
  "Product 5": {
    black: "img/cards/Product5-Black.webp",
    white: "img/cards/Product5-White.webp",
    beige: "img/cards/Product5-Beige.webp",
  },
  "Product 6": {
    black: "img/cards/Product6-Black.webp",
    white: "img/cards/Product6-White.webp",
    beige: "img/cards/Product6-Beige.webp",
  },
  "Product 7": {
    black: "img/cards/Product7-Black.webp",
    white: "img/cards/Product7-White.webp",
    beige: "img/cards/Product7-Beige.webp",
  },
  "Product 8": {
    black: "img/cards/Product8-Black.webp",
    white: "img/cards/Product8-White.webp",
    beige: "img/cards/Product8-Beige.webp",
  },
  "Product 9": {
    black: "img/collection/Product9-Black.webp",
    white: "img/collection/Product9-White.webp",
    beige: "img/collection/Product9-Beige.webp",
  },
  "Product 10": {
    black: "img/collection/Product10-Black.webp",
    white: "img/collection/Product10-White.webp",
    beige: "img/collection/Product10-Beige.webp",
  },
  "Product 11": {
    black: "img/collection/Product11-Black.webp",
    white: "img/collection/Product11-White.webp",
    beige: "img/collection/Product11-Beige.webp",
  },
  "Product 12": {
    black: "img/collection/Product12-Black.webp",
    white: "img/collection/Product12-White.webp",
    beige: "img/collection/Product12-Beige.webp",
  },
  "Product 13": {
    black: "img/Quick-add/Product13-Black.webp",
    white: "img/Quick-add/Product13-White.webp",
    beige: "img/Quick-add/Product13-Beige.webp",
  },
  "Product 14": {
    black: "img/Quick-add/Product14-Black.webp",
    white: "img/Quick-add/Product14-White.webp",
    beige: "img/Quick-add/Product14-Beige.webp",
  },
};

productCards.forEach((card) => {
  card.addEventListener("click", function () {
    const name = card.getAttribute("data-name");
    const price = card.getAttribute("data-price");
    const img = card.getAttribute("data-img");

    // Set the current product's image map
    currentProductImages = productImages[name] || {};

    // Default image (Black as default)
    modalImage.src = currentProductImages.black || img;
    modalImage.alt = name;
    modalName.textContent = name;
    modalPrice.textContent = price;

    productModal.classList.remove("hidden");
    productOverlay.classList.remove("hidden");

    // Reset color selection to default (Black)
    document.querySelector("#box1 -color-black").checked = true;
  });
});

// Listen for color selection change and update the image
colorSelectors.forEach((color) => {
  color.addEventListener("change", function () {
    const selectedColor = document.querySelector(
      ".product-color input:checked"
    ).value;
    if (currentProductImages[selectedColor]) {
      modalImage.src = currentProductImages[selectedColor]; // Update image dynamically
    }
  });
});

productCloseModal.addEventListener("click", function () {
  productModal.classList.add("hidden");
  productOverlay.classList.add("hidden");
});

productOverlay.addEventListener("click", function () {
  productModal.classList.add("hidden");
  productOverlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !productModal.classList.contains("hidden")) {
    productModal.classList.add("hidden");
    productOverlay.classList.add("hidden");
  }
});

///////////////////////////////////////
// Quick Add

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".quick-add-product").forEach((product) => {
    const colorInputs = product.querySelectorAll(
      ".color-selector input[type='radio']"
    );
    const productImage = product.querySelector(".quick-img");

    colorInputs.forEach((input) => {
      input.addEventListener("change", function () {
        const images = JSON.parse(product.getAttribute("data-images"));
        productImage.style.backgroundImage = `url(${images[this.value]})`;
      });
    });
  });
});
