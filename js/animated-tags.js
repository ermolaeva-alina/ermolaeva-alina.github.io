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

const truncNumber = (number) => {
  return Math.trunc(number * 100) / 100
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createRoundedRectangle = (x, y, text, color) => {
  const index = getRandomInt(0, 100000);
  $canvasContainer.append(`<div id="tag${index}" class="interactive-tag tag-24">${text}</div>`);
  const $tag1 = $("#tag" + index);
  const height = $tag1.height();
  const width = $tag1.outerWidth();

  $tag1.css("width", width + "px")
  $tag1.css("padding", 0)
  $tag1.css("background-color", color)

  const radius = Number.parseInt($tag1.css("border-radius").replace("px", ""));
  return {
    w: width + 4,
    h: height + 4,
    body: Bodies.rectangle(x, y, width + 4, height + 4, {chamfer: {radius}}),
    elem: document.querySelector("#tag" + index),
    prevX: truncNumber(x),
    prevY: truncNumber(y),
    render() {
      const {x, y} = this.body.position;
      let xFixed = truncNumber(x);
      let yFixed = truncNumber(y);

      if (this.prevX === xFixed && this.prevY === yFixed) {
        return;
      }

      const top = yFixed - this.h / 2;
      this.elem.style.top = `${top}px`;
      const left = xFixed - this.w / 2;
      this.elem.style.left = `${left}px`;
      this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      this.prevX = xFixed;
      this.prevY = yFixed;
    },
  }
}

const render = Matter.Render.create({
  element: $canvasContainer.get(0),
  engine: engine,
  options: {
    width: $canvasContainer.width(),
    height: $canvasContainer.height(),
    wireframes: true // включаем ваирфреймы
  }
});

const width = $canvasContainer.width();
const height = $canvasContainer.height();
const topAdditionalSpace = 500;
const wallsHeight = height + topAdditionalSpace;
let lastColorIndex = 0;
const tags = tagTexts.map(text => {
  const x = getRandomInt(width * 0.2, width * 0.8);
  const y = getRandomInt(height * 0.2 - topAdditionalSpace, height * 0.8);
  const roundedRectangle = createRoundedRectangle(x, y, text, colors[lastColorIndex++ % colors.length]);
  Composite.add(engine.world, roundedRectangle.body);
  return roundedRectangle;
});

const mouseConstraint = Matter.MouseConstraint.create(
  engine, {element: $canvasContainer.get(0)}
);

Composite.add(engine.world, [mouseConstraint]);

Composite.add(engine.world, [
  Bodies.rectangle(width / 2, -topAdditionalSpace, width, 1, {isStatic: true, render: {visible: true}}), // top
  Bodies.rectangle(width / 2, height, width, 1, {isStatic: true, render: {visible: true}}), // bottom
  Bodies.rectangle(0, (height - topAdditionalSpace) / 2, 1, wallsHeight, {isStatic: true, render: {visible: true}}), // left
  Bodies.rectangle(width, (height - topAdditionalSpace) / 2, 1, wallsHeight, {isStatic: true, render: {visible: true}}) // right
]);

// Matter.Render.run(render);

(function rerender() {
  tags.forEach(box => box.render());
  Engine.update(engine);
  requestAnimationFrame(rerender);
})();
