import $ from 'jquery'

if ('ontouchstart' in window || navigator.maxTouchPoints) {
  [
    '.cv-button',
    '.explore-case-studies-button',
    '.link-block',
    '.full-case-link-button',
    '.footer-button',
  ].forEach(value => {
    $(value).each((index, element) => {
      const $element = $(element);
      $element.on('click', () => {
        $element.removeClass('no-hover')
        setTimeout(() => {
          $element.addClass('no-hover')
        }, 1000)
      })
    })
  })
}
