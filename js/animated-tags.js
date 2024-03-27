import {AnimatedTags} from "./animated-tags-physics";

(function mainScreenTags() {
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

  const animatedTags = new AnimatedTags(".main-container-content .canvas-container:visible", tagTexts, colors);
  animatedTags.render();

  window.addEventListener('resize', () => {
    animatedTags.onWindowResizing()
  });
})();

const caseColors = ["#D5B8F0", "#C1D8FE", "#F9E398", "#EB7A53", "#B3DDC7"];

(function case1Tags() {

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

  window.addEventListener('resize', () => {
    animatedTags.onWindowResizing()
  });
})();

(function case2Tags() {
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

  window.addEventListener('resize', () => {
    animatedTags.onWindowResizing()
  });
})();

(function case3Tags() {
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

  window.addEventListener('resize', () => {
    animatedTags.onWindowResizing()
  });
})();
