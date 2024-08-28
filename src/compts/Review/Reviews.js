import { createUnversalSlider } from '../UniversalSlider/UniversalSlider';
import client from '../../imgs/review/client.png';
import plus from '../../imgs/review/starPlus.png';
import minus from '../../imgs/review/starMinus.png';

const arrItemReview = [
  {
    name: 'Rajesh K',
    img: client,
    text: `I’ve tried several betting apps, but this one stands out. The live
            betting feature is excellent, and the customer support is
            responsive. Great bonuses too. Very satisfied!`,
  },
  {
    name: 'Rajesh K',
    img: client,
    text: `I’ve tried several betting apps, but this one stands out. The live
            betting feature is excellent, and the customer support is
            responsive. Great bonuses too. Very satisfied!`,
  },
  {
    name: 'Rajesh K',
    img: client,
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
                src=${plus}
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src=${plus}
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src=${plus}
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src=${plus}
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src=${minus}
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
