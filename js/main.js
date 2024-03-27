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
});

$('#up-button').on('click', () => {
  window.scrollTo({top: 0, behavior: "smooth"});
})

const calculateAnimationStep = () => {
  if (window.scrollY === 0 && !window.matchMedia("(max-width: 600px)").matches) {
    const footerHeight = $(".floating-footer-container").height();
    const footerMargin = Number.parseInt($(".main-footer-section").css("margin-top").replace("px", ""));
    return footerHeight - footerMargin
  }
  return 0;
};

const calculateDescriptionBlockBottomPosition = () => {
  const $description = $("#description-section");
  return $description.position().top + $description.outerHeight();
};

const calculateHeaderBottomPadding = () => {
  const visibleChild = $('.floating-header-container > *').not((index, element) => {
    return $(element).css('display') === 'none';
  });
  return Number.parseInt(visibleChild.css("padding-bottom").replace("px", ""));
};

function calculateCasesScrollPosition() {
  const animationStep = calculateAnimationStep();
  const descriptionBlockBottomPosition = calculateDescriptionBlockBottomPosition();
  const headerBottomPadding = calculateHeaderBottomPadding();
  const floatingHeaderHeight = $(".floating-header-container").height();
  const descriptionBottomCountingAnimation = descriptionBlockBottomPosition - animationStep;
  const headerSizeWithoutTopPadding = floatingHeaderHeight - headerBottomPadding;
  return descriptionBottomCountingAnimation - headerSizeWithoutTopPadding;
}

$('#explore-cases-button').on('click', () => window.scrollTo({top: calculateCasesScrollPosition(), behavior: "smooth"}))

const $window = $(window);
const $floatingFooter = $(".floating-footer-container");
const $nextAfterFooter = $(".description-container");

let lastScrollY = window.scrollY;

function animateFooterOnScroll() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return;
  }

  if (window.scrollY === 0) {
    $nextAfterFooter.addClass('description-container-margin').removeClass('description-container-margin-scrolled');
  } else {
    $nextAfterFooter.addClass('description-container-margin-scrolled').removeClass('description-container-margin');
  }

  if (window.scrollY === 0 || window.scrollY < lastScrollY) {
    $floatingFooter.addClass('animate__slideInUp').removeClass('animate__slideOutDown');
  } else {
    $floatingFooter.addClass('animate__slideOutDown').removeClass('animate__slideInUp');
  }
  lastScrollY = window.scrollY;
}

$window.scroll(() => {
  animateFooterOnScroll();

  const $visibleHeaderMenu = $('.floating-header-container > *')
    .not((index, element) => $(element).css('display') === 'none')
    .find(".menu-buttons")
    .first();

  const $home = $visibleHeaderMenu.children(".home").first();
  const $work = $visibleHeaderMenu.children(".work").first();
  const $contacts = $visibleHeaderMenu.children(".contacts").first();
  if (window.scrollY < calculateCasesScrollPosition()) {
    $home.addClass("selected-menu-button")
    $work.removeClass("selected-menu-button")
    $contacts.removeClass("selected-menu-button")
  } else if (window.innerHeight + Math.round(window.scrollY) < document.body.offsetHeight) {
    $home.removeClass("selected-menu-button")
    $work.addClass("selected-menu-button")
    $contacts.removeClass("selected-menu-button")
  } else {
    $home.removeClass("selected-menu-button")
    $work.removeClass("selected-menu-button")
    $contacts.addClass("selected-menu-button")
  }
})

$(".menu-buttons > .home").on('click', () => {
  window.scrollTo({top: 0, behavior: "smooth"})
});
$(".menu-buttons > .work").on('click', () => {
  window.scrollTo({top: calculateCasesScrollPosition(), behavior: "smooth"})
});
$(".menu-buttons > .contacts").on('click', () => {
  window.scrollTo({top: document.body.offsetHeight, behavior: "smooth"})
});
