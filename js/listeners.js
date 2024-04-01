import $ from "jquery";
import {showCopiedPopup} from "./copied-popup.js";
import {animateFooterOnScroll, animateMenuButtons, calculateCasesScrollPosition} from "./scroll.js";

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
