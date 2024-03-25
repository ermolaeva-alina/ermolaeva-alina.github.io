import Matter from 'matter-js'
import $ from "jquery";

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

const Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

const engine = Engine.create({
  positionIterations: 10,
  velocityIterations: 10
});
engine.timing.timeScale = 0.8;
const $canvasContainer = $(".right-main-block > .canvas-container");


const createRoundedRectangle = (x, y, text, color) => {
  const index = Math.floor(Math.random() * 1000000);
  $canvasContainer.append(`<div id="tag${index}" class="interactive-tag tag-24">${text}</div>`);
  const $tag1 = $("#tag" + index);
  const height = $tag1.height();
  const width = $tag1.outerWidth();

  $tag1.css("width", width + "px")
  $tag1.css("padding", 0)
  $tag1.css("background-color", color)
  const limitToContainer = function (x, y) {
    this.body.position.x = Math.min(Math.max(x, 0), $canvasContainer.width());
    this.body.position.y = Math.min(Math.max(y, 0), $canvasContainer.height());
  };

  const radius = $tag1.css("border-radius").replace("px", "");
  return {
    w: width,
    h: height,
    body: Bodies.rectangle(x, y, width, height, {chamfer: {radius}}),
    elem: document.querySelector("#tag" + index),
    render() {
      const {x, y} = this.body.position;
      limitToContainer.call(this, x, y);
      this.elem.style.top = `${Math.floor(y - this.h / 2)}px`;
      this.elem.style.left = `${Math.floor(x - this.w / 2)}px`;
      this.elem.style.transform = `rotate(${this.body.angle}rad)`;
    },
  }
}

const width = $canvasContainer.width();
const height = $canvasContainer.height();
let lastColorIndex = 0;
const tags = tagTexts.map(value => {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const roundedRectangle = createRoundedRectangle(x, y, value, colors[lastColorIndex++ % colors.length]);
  Composite.add(engine.world, roundedRectangle.body);
  return roundedRectangle;
});

const mouseConstraint = Matter.MouseConstraint.create(
  engine, {element: $canvasContainer.get(0)}
);

Composite.add(engine.world, [mouseConstraint]);

Composite.add(engine.world, [
  Bodies.rectangle(width - width / 2, 0, width, 1, {isStatic: true,}), // top
  Bodies.rectangle(width - width / 2, height, width, 1, {isStatic: true,}), // bottom
  Bodies.rectangle(0, height - height / 2, 1, height, {isStatic: true,}), // left
  Bodies.rectangle(width + 10, height - height / 2, 1, height, {isStatic: true,}) // right
]);

(function rerender() {
  tags.forEach(box => box.render());
  Engine.update(engine);
  requestAnimationFrame(rerender);
})();
