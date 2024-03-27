import {AnimatedTags} from "./animated-tags-physics";
import $ from "jquery";
import _ from "lodash";

const mainScreenTags = (() => {
  const colors = ["#B3DDC7", "#F9E398", "#EB7A53", "#C1D8FE"]

  const tagTexts = [
    "JTBD",
    "User & Market Research",
    "Usability testing",
    "Accessibility",
    "CJM",
    "Qualitative research",
    "UX design",
    "Wireframing",
    "UX research",
    "Quantitative research",
    "Design systems",
    "Problem solving",
    "User centred design",
    "User-Centered Design",
    "Prototyping",
    "Interaction design"
  ];

  const animatedTags = new AnimatedTags(".main-container-content .canvas-container:visible", tagTexts, colors, true, false)
  animatedTags.render();
  return animatedTags;
})();

const caseColors = ["#D5B8F0", "#C1D8FE", "#F9E398", "#EB7A53", "#B3DDC7"];

const case1Tags = (() => {
  const tagTexts = [
    "Design system",
    "UI design",
    "B2B",
    "Qualitative research",
    "Usability testing",
    "2022"
  ];

  const animatedTags = new AnimatedTags(".case-1-container .canvas-container", tagTexts, caseColors);
  animatedTags.render();
  return animatedTags;
})();

const case2Tags = (() => {
  const tagTexts = [
    "Design system",
    "UI design",
    "B2B",
    "Qualitative research",
    "Usability testing",
    "2022"
  ];

  const animatedTags = new AnimatedTags(".case-2-container .canvas-container", tagTexts, caseColors);
  animatedTags.render();
  return animatedTags;
})();

const case3Tags = (() => {
  const tagTexts = [
    "Design system",
    "UI design",
    "B2B",
    "Qualitative research",
    "Usability testing",
    "2022"
  ];

  const animatedTags = new AnimatedTags(".case-3-container .canvas-container", tagTexts, caseColors);
  animatedTags.render();
  return animatedTags;
})();

let windowWidth = $(window).width();
let heightWidth = $(window).height();

$(window).resize(() => {
  if (windowWidth === $(window).width() && heightWidth === $(window).height()) {
    return;
  }

  windowWidth = $(window).width();
  heightWidth = $(window).height();

  mainScreenTags.onWindowResizing();
  case1Tags.onWindowResizing();
  case2Tags.onWindowResizing();
  case3Tags.onWindowResizing();
})

// this somehow allows to use scroll on the canvas containers
$('.canvas-container').each(function() {
  $(this).on('wheel', () => {});
});
