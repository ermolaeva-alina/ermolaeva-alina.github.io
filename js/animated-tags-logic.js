import Matter from "matter-js";
import $ from "jquery";
import {getRandomInt, truncNumber} from "./utils";
import _ from "lodash";

const Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;


export class AnimatedTags {
  #topAdditionalSpace = 500;

  constructor(containerSelector, tagTexts, tagColors, mouseDragging = false, debugPhysics = false) {
    this.containerSelector = containerSelector;
    this.$canvasContainer = $(containerSelector);
    this.tagTexts = tagTexts;
    this.tagColors = tagColors;
    this.engine = null;
    this.initialized = false;
    this.tags = [];
    this.debugPhysics = debugPhysics;
    this.mouseDragging = mouseDragging;
  }

  init() {
    this.engine = Engine.create({
      // positionIterations: 10,
      // velocityIterations: 10,
      timing: {
        timeScale: 0.8
      }
    });

    const {containerWidth, containerHeight} = this.#createObjects();

    if (this.debugPhysics) {
      this.render = Matter.Render.create({
        element: this.$canvasContainer.get(0),
        engine: this.engine,
        options: {
          width: containerWidth,
          height: containerHeight,
          wireframes: true
        }
      });
      Matter.Render.run(render);
    }

    this.initialized = true;
  }

  #createObjects() {
    const containerWidth = this.$canvasContainer.width();
    const containerHeight = this.$canvasContainer.height();

    const wallsHeight = containerHeight + this.#topAdditionalSpace;

    this.tags = this.tagTexts.map((text, index) => {
      const x = getRandomInt(containerWidth * 0.2, containerWidth * 0.8);
      const y = getRandomInt(containerHeight * 0.2 - this.#topAdditionalSpace, containerHeight * 0.8);
      const tagColor = this.tagColors[index % this.tagColors.length];
      const roundedRectangle = createRoundedRectangle(x, y, text, tagColor, this.$canvasContainer, this.mouseDragging);
      Composite.add(this.engine.world, roundedRectangle.body);
      return roundedRectangle;
    });

    if (this.mouseDragging) {
      createMouseConstraint(this.engine, this.$canvasContainer);
    }

    Composite.add(this.engine.world, createWalls(containerWidth, containerHeight, wallsHeight, this.#topAdditionalSpace));
    return {containerWidth, containerHeight};
  }

  removeObjects() {
    Composite.clear(this.engine.world);
    this.tags.forEach(tag => tag.elem.remove());
    this.tags = [];
  }

  render() {
    if (!this.initialized) {
      this.init();
    }
    this.tags.forEach(box => box.render());
    Engine.update(this.engine);
    requestAnimationFrame(this.render.bind(this));
  }

  #reinit = _.throttle(() => {
    this.removeObjects()
    this.$canvasContainer = $(this.containerSelector);
    this.#createObjects()
    if (this.debugPhysics) {
      this.render.canvas.height = this.$canvasContainer.height()
      this.render.canvas.width = this.$canvasContainer.width()
    }
  }, 1000)

  onWindowResizing() {
    this.#reinit();
  }
}

const createWalls = (containerWidth, containerHeight, wallsHeight, topAdditionalSpace) => [
  Bodies.rectangle(containerWidth / 2, -topAdditionalSpace, containerWidth, 1, {isStatic: true}), // top
  Bodies.rectangle(containerWidth / 2, containerHeight, containerWidth, 1, {isStatic: true}), // bottom
  Bodies.rectangle(0, (containerHeight - topAdditionalSpace) / 2, 1, wallsHeight, {isStatic: true}), // left
  Bodies.rectangle(containerWidth, (containerHeight - topAdditionalSpace) / 2, 1, wallsHeight, {isStatic: true}) // right
];

const createRoundedRectangle = (x, y, text, color, $canvasContainer, mouseDragging) => {
  const index = getRandomInt(0, 100000);
  $canvasContainer.append(`<div id="tag${index}" class="interactive-tag tag-24">${text}</div>`);
  const $tag1 = $("#tag" + index);

  const height = $tag1.height();
  const width = $tag1.outerWidth();

  $tag1.css({
    "width": width + "px",
    "padding": 0,
    "background-color": color,
    "cursor": mouseDragging ? "pointer" : "default"
  });

  const radius = Number.parseInt($tag1.css("border-radius").replace("px", ""));
  const borderSize = Number.parseInt($tag1.css("border").replace(/px.*/, "")) * 2;
  return {
    w: width + borderSize,
    h: height + borderSize,
    body: Bodies.rectangle(x, y, width + borderSize, height + borderSize, {chamfer: {radius}}),
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

const createMouseConstraint = (engine, $canvasContainer) => {
  const mouseConstraint = Matter.MouseConstraint.create(
   engine, {element: $canvasContainer.get(0)}
  );

  // todo: makes a lot of errors to console
  const mouse = mouseConstraint.mouse;
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
  mouse.element.removeEventListener('touchstart', mouse.mousedown);
  mouse.element.removeEventListener('touchmove', mouse.mousemove);
  mouse.element.removeEventListener('touchend', mouse.mouseup);

  mouse.element.addEventListener('touchstart', mouse.mousedown, {passive: true});
  mouse.element.addEventListener('touchmove', (e) => {
    if (mouseConstraint.body) {
      mouse.mousemove(e);
    }
  });
  mouse.element.addEventListener('touchend', (e) => {
    if (mouseConstraint.body) {
      mouse.mouseup(e);
    }
  });

  Composite.add(engine.world, [mouseConstraint]);
};
