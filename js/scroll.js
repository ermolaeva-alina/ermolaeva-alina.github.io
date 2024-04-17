import $ from "jquery";

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

export const calculateCasesScrollPosition = () => {
  const animationStep = calculateAnimationStep();
  const descriptionBlockBottomPosition = calculateDescriptionBlockBottomPosition();
  const headerBottomPadding = calculateHeaderBottomPadding();
  const floatingHeaderHeight = $(".floating-header-container").height();
  const descriptionBottomCountingAnimation = descriptionBlockBottomPosition - animationStep;
  const headerSizeWithoutTopPadding = floatingHeaderHeight - headerBottomPadding;
  return descriptionBottomCountingAnimation - headerSizeWithoutTopPadding;
};

const calculateFooterLinksTopPosition = () => $(".footer-links").position().top

const calculateFooterTopPosition = () => $("footer").position().top;

const $floatingFooter = $(".floating-footer-container");
const $nextAfterFooter = $(".description-container");

let lastScrollY = window.scrollY;

export const animateFooterOnScroll = () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return;
  }

  const isScrolledToMostTop = window.scrollY === 0;
  if (isScrolledToMostTop) {
    $nextAfterFooter.addClass('description-container-margin').removeClass('description-container-margin-scrolled');
  } else {
    $nextAfterFooter.addClass('description-container-margin-scrolled').removeClass('description-container-margin');
  }

  const wasScrolledToTop = window.scrollY < lastScrollY;
  const isScrolledUpperThanFooterLinks = window.scrollY + window.innerHeight < calculateFooterLinksTopPosition();
  if (isScrolledToMostTop || (wasScrolledToTop && isScrolledUpperThanFooterLinks)) {
    $floatingFooter.addClass('animate__slideInUp').removeClass('animate__slideOutDown');
  } else {
    $floatingFooter.addClass('animate__slideOutDown').removeClass('animate__slideInUp');
  }
  lastScrollY = window.scrollY;
};

export const animateMenuButtons = () => {
  const $visibleHeaderMenu = $('.floating-header-container > *')
    .not((index, element) => $(element).css('display') === 'none')
    .find(".menu-buttons")
    .first();

  const $home = $visibleHeaderMenu.children(".home").first();
  const $work = $visibleHeaderMenu.children(".work").first();
  const $contacts = $visibleHeaderMenu.children(".contacts").first();
  if (window.scrollY < calculateCasesScrollPosition() - 5) {
    $home.addClass("selected-menu-button")
    $work.removeClass("selected-menu-button")
    $contacts.removeClass("selected-menu-button")
  } else if (window.innerHeight + window.scrollY < calculateFooterTopPosition()) {
    $home.removeClass("selected-menu-button")
    $work.addClass("selected-menu-button")
    $contacts.removeClass("selected-menu-button")
  } else {
    $home.removeClass("selected-menu-button")
    $work.removeClass("selected-menu-button")
    $contacts.addClass("selected-menu-button")
  }
};

export const initFooter = () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return;
  }

  if (window.scrollY === 0) {
    $nextAfterFooter.addClass('description-container-margin').removeClass('description-container-margin-scrolled');
  } else {
    $nextAfterFooter.addClass('description-container-margin-scrolled').removeClass('description-container-margin');
  }
}
