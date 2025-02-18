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
