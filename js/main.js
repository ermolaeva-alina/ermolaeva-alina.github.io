import $ from "jquery";
import 'animate.css';

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
  }, 5000); // Элемент начнет исчезать через 5 секунд

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
