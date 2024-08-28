import { createUnversalSlider } from '../UniversalSlider/UniversalSlider';

const arrItemReview = [
  {
    name: 'Rajesh K',
    img: './src/imgs/review/client.png',
    text: `I’ve tried several betting apps, but this one stands out. The live
            betting feature is excellent, and the customer support is
            responsive. Great bonuses too. Very satisfied!`,
  },
  {
    name: 'Rajesh K',
    img: './src/imgs/review/client.png',
    text: `I’ve tried several betting apps, but this one stands out. The live
            betting feature is excellent, and the customer support is
            responsive. Great bonuses too. Very satisfied!`,
  },
  {
    name: 'Rajesh K',
    img: './src/imgs/review/client.png',
    text: `I’ve tried several betting apps, but this one stands out. The live
            betting feature is excellent, and the customer support is
            responsive. Great bonuses too. Very satisfied!`,
  },
];

function createItemReview() {
  const res = arrItemReview.map((el) => {
    return `
      <li class="review__item">
        <img
          class="review__client-img"
          src="${el.img}"
          alt="client"
        />
        <div class="review__wrapper-card">
          <h4 class="review__item-title">${el.name}</h4>
          <ul class="review__stars">
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starPlus.png"
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starPlus.png"
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starPlus.png"
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starPlus.png"
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starMinus.png"
                alt="star"
              />
            </li>
          </ul>
          <p class="review__item-text">
            ${el.text}
          </p>
        </div>
      </li>
    `;
  });
  return res.join('\n');
}

export const review = createUnversalSlider('review', createItemReview());
