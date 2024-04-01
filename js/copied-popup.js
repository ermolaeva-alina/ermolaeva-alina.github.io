import $ from "jquery";

const $copiedPopup = $(".copied-popup-flying-container");

let showed = false;

export async function showCopiedPopup() {
  await navigator.clipboard.writeText("alinaermolaeva044@gmail.com");

  if (showed) {
    return;
  }

  showed = true;
  $copiedPopup.css('display', 'block').addClass('animate__fadeInUp').removeClass('animate__fadeOutDown');

  setTimeout(() => {
    $copiedPopup.addClass('animate__fadeOutDown').removeClass('animate__fadeInUp');
  }, 3000); // Элемент начнет исчезать через 3 секунд

  $copiedPopup.on('animationend', () => {
    if ($copiedPopup.hasClass('animate__fadeOutDown')) {
      $copiedPopup.css('display', 'none');
      showed = false;
    }
  });
}
