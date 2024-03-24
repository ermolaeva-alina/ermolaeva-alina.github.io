import Matter from 'matter-js'
import $ from "jquery";
import _ from "lodash";

const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite;

const engine = Engine.create();

const $canvasContainer = $(".right-main-block > .canvas-container");
const $canvasContainerParent = $(".right-main-block");

const render = Render.create({
  element: $canvasContainer.get(0),
  engine: engine,
  options: {
    width: $canvasContainer.width(),
    height: $canvasContainer.height(),
    wireframes: false,
    background: "#37332F"
  }
});


const createMouseControl = () => {
  // add mouse control
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  Composite.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
  render.mouse = mouse;
}

const createRoundedRectangle = (x, y, text) => {
  return Bodies.rectangle(x, y, 300, 56, {
    chamfer: {
      radius: 25
    }
  })
}

const createObjects = () => {

  Composite.add(engine.world, [
    createRoundedRectangle(400, 200),
    createRoundedRectangle(400, 200),
    createRoundedRectangle(400, 200),
    createRoundedRectangle(400, 200),
    createRoundedRectangle(400, 200),
    createRoundedRectangle(400, 200),
  ]);

  Composite.add(engine.world, [
    Bodies.rectangle($canvasContainer.width() - $canvasContainer.width() / 2, 0, $canvasContainer.width(), 1, {isStatic: true}), // top
    Bodies.rectangle($canvasContainer.width() - $canvasContainer.width() / 2, $canvasContainer.height(), $canvasContainer.width(), 1, {isStatic: true}), // bottom
    Bodies.rectangle(0, $canvasContainer.height() - $canvasContainer.height() / 2, 1, $canvasContainer.height(), {isStatic: true}), // left
    Bodies.rectangle($canvasContainer.width() + 10, $canvasContainer.height() - $canvasContainer.height() / 2, 1, $canvasContainer.height(), {isStatic: true}) // right
  ]);


}

const run = () => {

// run the renderer
  Render.run(render);

// create runner
  const runner = Runner.create();

// run the engine
  Runner.run(runner, engine);
}

createObjects();
createMouseControl();
run();
const debouncedFunc = _.throttle(() => {
  Composite.clear(engine.world)
  render.canvas.height = $canvasContainerParent.height()
  render.canvas.width = $canvasContainerParent.width()
  createObjects()
  createMouseControl();
}, 200, {leading: false});
window.addEventListener('resize', () => {
  debouncedFunc()
});

//https://stackoverflow.com/questions/62681437/matter-js-text-inside-a-rectangle
// https://stackoverflow.com/questions/61420347/html-elements-with-matter-js
