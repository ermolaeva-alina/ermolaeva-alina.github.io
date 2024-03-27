import {AnimatedTags} from "./animated-tags-physics";

(function mainScreenTags() {
  const colors = ["#B3DDC7", "#F9E398", "#EB7A53", "#C1D8FE"]

  const tagTexts = [
    "JTB",
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

  new AnimatedTags(".right-main-block > .canvas-container", tagTexts, colors).render();
})()
