import $ from "jquery";

const $copiedPopup = $(".copied-popup-flying-container");

let showed = false;

export async function showCopiedPopup() {
  await navigator.clipboard.writeText("alinaermolaeva044@gmail.com");

  if (showed) {
    return;
  }

  showed = true;

  const classes = getShowAndHideClasses();

  $copiedPopup.css('display', 'block').addClass(classes.show).removeClass(classes.hide);

  setTimeout(() => {
    $copiedPopup.addClass(classes.hide).removeClass(classes.show);
  }, 3000); // Элемент начнет исчезать через 3 секунд

  $copiedPopup.on('animationend', () => {
    if ($copiedPopup.hasClass(classes.hide)) {
      $copiedPopup.css('display', 'none');
      showed = false;
    }
    $copiedPopup.removeClass(classes.hide)
  });
}

const getShowAndHideClasses = () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return {show: 'animate__fadeInDown', hide: 'animate__fadeOutUp'}
  }
  return {show: 'animate__fadeInUp', hide: 'animate__fadeOutDown'}
}
