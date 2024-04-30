import $ from "jquery";
import {showCopiedPopup} from "./copied-popup.js";
import {animateFooterOnScroll, animateMenuButtons, calculateCasesScrollPosition} from "./scroll.js";
import data from "./data.js";

$('.email-container').on("click", async () => showCopiedPopup());
$('#up-button').on('click', () => window.scrollTo({top: 0, behavior: "smooth"}))
$('#explore-cases-button').on('click', () => window.scrollTo({top: calculateCasesScrollPosition(), behavior: "smooth"}))
$(".menu-buttons > .home").on('click', () => window.scrollTo({top: 0, behavior: "smooth"}));
$(".menu-buttons > .work").on('click', () => window.scrollTo({
  top: calculateCasesScrollPosition(),
  behavior: "smooth"
}));
$(".menu-buttons > .contacts").on('click', () => window.scrollTo({
  top: document.body.offsetHeight,
  behavior: "smooth"
}));
$(window).scroll(() => {
  animateFooterOnScroll();
  animateMenuButtons();
})

$(window).on('resize', () => animateFooterOnScroll());

$(".cv-block").on('click', () => window.open(data.cv))
$(".cv-button").on('click', () => window.open(data.cv))
$(".behance").on('click', () => window.open(data.behance))
$(".linkedin").on('click', () => window.open(data.linkedin))
$(".telegram").on('click', () => window.open(data.telegram))
