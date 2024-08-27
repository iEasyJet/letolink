export const arrItemPreview = [
  {
    id: 0,
    title: 'Indian Premier League',
    text: `IPL or the Indian Premier League is the world’s top men’s T20
                  cricket league. Organized by the BCCI, its first edition was
                  held in 2008. The latest edition of the league (2024) had 10
                  participating teams. The games are held all over India in
                  different cities. Most of the world’s top cricket players are
                  seen in this exciting league.`,
  },
  {
    id: 1,
    title: 'Russia Premier League',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur temporibus accusamus, aliquid facere dolores eum doloremque mollitia magnam facilis laborum perferendis impedit expedita totam maiores dignissimos nemo nisi, unde molestiae.',
  },
];

export function createItemPreview(arr, index) {
  const res = arr.map((el) => {
    return `
      <li class="preview__item ${
        el.id === index ? 'preview__item-active' : ''
      }"></li>
    `;
  });
  return res.join('\n');
}

export const preview = `
      <section class="preview">
        <div class="preview__wrapper-1">
          <div class="preview__wrapper-2">
            <img
              class="preview__img"
              src="./src/imgs/preview/preview.png"
              alt="betting"
            />
            <div class="preview__wrapper-3">
              <div class="preview__wrapper-text">
                <h2 class="preview__title"></h2>
                <p class="preview__text">
                 
                </p>
              </div>
              <div class="preview__wrapper-slider">
                <button
                  class="preview__button preview__button-left"
                  type="button"
                >
                  <span class="material-symbols-outlined"> chevron_left </span>
                </button>
                <ul class="preview__list">

                </ul>
                <button
                  class="preview__button preview__button-right"
                  type="button"
                >
                  <span class="material-symbols-outlined"> chevron_right </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>`;
