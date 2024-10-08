import Matter from 'matter-js'
import $ from 'jquery'
import { getRandomInt } from './utils'
import _ from 'lodash'

const Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite

const maxRotationAngle = 1.0

export class AnimatedTags {
  #topAdditionalSpace = 500

  constructor(containerSelector, tagTexts, tagColors, {
    flippable = true,
    mouseDragging = false,
    debugPhysics = false
  }) {
    this.containerSelector = containerSelector
    this.$matterJsContainer = $(containerSelector)
    this.tagTexts = tagTexts
    this.tagColors = tagColors
    this.engine = null
    this.tags = []
    this.debugPhysics = debugPhysics
    this.mouseDragging = mouseDragging
    this.flippable = flippable
  }

  init() {
    this.engine = Engine.create({
      positionIterations: 10,
      velocityIterations: 10,
      constraintIterations: 10,
      timing: {
        timeScale: 0.8
      }
    })

    const { containerWidth, containerHeight } = this.#createObjects()

    if (this.debugPhysics) {
      this.matterRender = Matter.Render.create({
        element: this.$matterJsContainer.get(0),
        engine: this.engine,
        options: {
          width: containerWidth,
          height: containerHeight,
          wireframes: true
        }
      })
      Matter.Render.run(this.matterRender)
    }
  }

  #createObjects() {
    const containerWidth = this.$matterJsContainer.width()
    const containerHeight = this.$matterJsContainer.height()

    const wallsHeight = containerHeight + this.#topAdditionalSpace

    this.tags = this.tagTexts.map((text, index) => {
      const x = getRandomInt(containerWidth * 0.2, containerWidth * 0.8)
      const y = getRandomInt(containerHeight * 0.2 - this.#topAdditionalSpace, containerHeight * 0.8)
      const tagColor = this.tagColors[index % this.tagColors.length]
      const roundedRectangle = createRoundedRectangle(x, y, text, tagColor, this.$matterJsContainer, this.mouseDragging, this.flippable)
      Composite.add(this.engine.world, roundedRectangle.body)
      return roundedRectangle
    })

    if (this.mouseDragging) {
      createMouseConstraint(this.engine, this.$matterJsContainer)
    }

    Composite.add(this.engine.world, createWalls(containerWidth, containerHeight, wallsHeight, this.#topAdditionalSpace))
    return { containerWidth, containerHeight }
  }

  removeObjects() {
    Composite.clear(this.engine.world, false)
    this.tags.forEach(tag => tag.elem.remove())
    this.tags = []
  }

  render() {
    this.tags.forEach(box => box.render())

    const delta = 1000 / 60
    const subSteps = 3
    const subDelta = delta / subSteps
    for (let i = 0; i < subSteps; i += 1) {
      Engine.update(this.engine, subDelta)
    }
    requestAnimationFrame(this.render.bind(this))
  }

  #reinit = _.throttle(() => {
    this.removeObjects()
    this.$matterJsContainer = $(this.containerSelector)
    this.#createObjects()
    if (this.debugPhysics) {
      this.matterRender.canvas.height = this.$matterJsContainer.height()
      this.matterRender.canvas.width = this.$matterJsContainer.width()
    }
  }, 1000)

  onWindowResizing() {
    this.#reinit()
  }
}

const createWalls = (containerWidth, containerHeight, wallsHeight, topAdditionalSpace) => [
  Bodies.rectangle(containerWidth / 2, -topAdditionalSpace, containerWidth, 1, { isStatic: true }), // top
  Bodies.rectangle(containerWidth / 2, containerHeight, containerWidth, 1, { isStatic: true }), // bottom
  Bodies.rectangle(0, (containerHeight - topAdditionalSpace) / 2, 1, wallsHeight, { isStatic: true }), // left
  Bodies.rectangle(containerWidth, (containerHeight - topAdditionalSpace) / 2, 1, wallsHeight, { isStatic: true }) // right
]

const createRoundedRectangle = (x, y, text, color, $matterJsContainer, mouseDragging, flippable) => {
  const index = getRandomInt(0, 100000)
  $matterJsContainer.append(`<div id="tag${index}" class="interactive-tag tag-24">${text}</div>`)
  const $tag1 = $('#tag' + index)

  const height = $tag1.height()
  const width = $tag1.outerWidth()

  $tag1.css({
    'width': width + 'px',
    'padding': 0,
    'background-color': color,
    'cursor': mouseDragging ? 'pointer' : 'default'
  })

  const radius = Number.parseInt($tag1.css('border-radius').replace('px', ''))
  const borderSize = Number.parseInt($tag1.css('border').replace(/px.*/, '')) * 2
  return {
    w: width + borderSize,
    h: height + borderSize,
    body: Bodies.rectangle(x, y, width + borderSize, height + borderSize, { chamfer: { radius } }),
    elem: document.querySelector('#tag' + index),
    render() {
      const angle = this.body.angle

      if (!flippable) {
        if (angle < -maxRotationAngle) {
          Matter.Body.setAngle(this.body, -maxRotationAngle)
        }

        if (angle > maxRotationAngle) {
          Matter.Body.setAngle(this.body, maxRotationAngle)
        }
      }

      const { x, y } = this.body.position

      const top = y - this.h / 2
      this.elem.style.top = `${top}px`
      const left = x - this.w / 2
      this.elem.style.left = `${left}px`
      this.elem.style.transform = `rotate(${angle}rad)`
    }
  }
}

const createMouseConstraint = (engine, $matterJsContainer) => {
  const mouseConstraint = Matter.MouseConstraint.create(
    engine, { element: $matterJsContainer.get(0) }
  )

  // todo: makes a lot of errors to console
  const mouse = mouseConstraint.mouse
  mouse.element.removeEventListener('mousewheel', mouse.mousewheel)
  mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)
  // mouse.element.removeEventListener('touchstart', mouse.mousedown);
  // mouse.element.removeEventListener('touchmove', mouse.mousemove);
  // mouse.element.removeEventListener('touchend', mouse.mouseup);
  //
  // mouse.element.addEventListener('touchstart', mouse.mousedown, {passive: true});
  // mouse.element.addEventListener('touchmove', (e) => {
  //   if (mouseConstraint.body) {
  //     mouse.mousemove(e);
  //   }
  // });
  // mouse.element.addEventListener('touchend', (e) => {
  //   if (mouseConstraint.body) {
  //     mouse.mouseup(e);
  //   }
  // });

  Composite.add(engine.world, [mouseConstraint])
}
