import data from "./data.js";
import $ from "jquery";
import images from '../img/**';

const arrowUrl = new URL(
  '../img/arrow-right.svg',
  import.meta.url
);

const getCaseHtml = (index, item) => {
  const imageUrl = new URL(
    images[item.imageName],
    import.meta.url
  );
  return `
    <section>
      <div class="case-container case-${index}-container">
        <div class="left-block-container">
          <div class="case-img-container">
            <img src="${imageUrl}" alt="">
          </div>
          <div class="header-and-description">
            <h2 class="light">${item.title}</h2>
            <div class="text-2 light">
              ${item.description}
            </div>
          </div>
          <div class="interactive-tags-block">
            <div class="matter-js-container"></div>
          </div>
          <div class="full-case-link-container">
            <div class="full-case-link-button easy-in-out-slow" id="full-case-button-${index}">
              <div class="tag-24 light">View full case study</div>
              <div class="arrow-button">
                <img class="easy-in-out-slow" src="${arrowUrl}" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="right-block-container">
          <img src="${imageUrl}" alt="">
        </div>
      </div>
    </section>
  `;
}

const $cases = $('#cases-section');
data.cases.forEach((item, index) => {
  $cases.append(getCaseHtml(index, item));
  $(`#full-case-button-${index}`).on('click', () => window.open(item.link))
})
