import { AnimatedTags } from './animated-tags-logic'
import $ from 'jquery'
import data from './data.js'

const colors = ['#B3DDC7', '#F9E398', '#EB7A53', '#C1D8FE']
const mainTagColors = ['#D5B8F0', '#C1D8FE', '#F9E398', '#EB7A53', '#B3DDC7']

const mainScreenTags = (() => {
  const containerSelector = '.main-container-content .matter-js-container:visible'
  const animatedTags = new AnimatedTags(containerSelector, data.mainTags, colors, { mouseDragging: true })
  animatedTags.init()
  animatedTags.render()
  return animatedTags
})()

const caseTags = data.cases.map((caseItem, index) => {
  const containerSelector = `.case-${index}-container .matter-js-container`
  const animatedTags = new AnimatedTags(containerSelector, caseItem.tags, mainTagColors, { flippable: false })
  animatedTags.init()
  animatedTags.render()
  return animatedTags
})

let windowWidth = $(window).width()
let heightWidth = $(window).height()

$(window).resize(() => {
  if (windowWidth === $(window).width() && heightWidth === $(window).height()) {
    return
  }

  windowWidth = $(window).width()
  heightWidth = $(window).height()

  mainScreenTags.onWindowResizing()
  caseTags.forEach(value => value.onWindowResizing())
})
