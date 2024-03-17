import $ from "jquery";
import 'animate.css';
//todo refactor it somehow
const $copiedPopup = $(".copied-popup-flying-container");

let showed = false;
$('.email-container').on("click", async () => {
  await navigator.clipboard.writeText("alinaermolaeva044@gmail.com");

  if (showed) {
    return;
  }

  showed = true;
  $copiedPopup.css('display', 'inline-block').addClass('animate__fadeInUp').removeClass('animate__fadeOutDown');

  setTimeout(() => {
    $copiedPopup.addClass('animate__fadeOutDown').removeClass('animate__fadeInUp');
  }, 3000); // Элемент начнет исчезать через 3 секунд

  $copiedPopup.on('animationend', () => {
    if ($copiedPopup.hasClass('animate__fadeOutDown')) {
      $copiedPopup.css('display', 'none');
      showed = false;
    }
  });
});

$('#up-button').on('click', () => {
  window.scrollTo({top: 0, behavior: "smooth"});
})

$('#explore-cases-button').on('click', () => {
  window.scrollTo({top: $(".case-studies-header").position().top, behavior: "smooth"});
})

const $window = $(window);
const $footer = $(".floating-footer-container");
const $nextAfterFooter = $(".description-container");

let lastScrollY = window.scrollY;

$window.scroll(() => {
  if (window.scrollY === 0) {
    $nextAfterFooter.addClass('description-container-margin').removeClass('description-container-margin-scrolled');
  } else {
    $nextAfterFooter.addClass('description-container-margin-scrolled').removeClass('description-container-margin');
  }

  if (window.scrollY === 0 || window.scrollY < lastScrollY) {
    $footer.addClass('animate__slideInUp').removeClass('animate__slideOutDown');
  } else {
    $footer.addClass('animate__slideOutDown').removeClass('animate__slideInUp');
  }
  lastScrollY = window.scrollY;
})
