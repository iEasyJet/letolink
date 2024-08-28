import { bet } from './src/compts/Bet/Bet';
import { bonus } from './src/compts/Bonus/Bonus';
import { download } from './src/compts/Download/Download';
import { header } from './src/compts/Header/Header';
import {
  preview,
  arrItemPreview,
  createItemPreview,
} from './src/compts/Preview/Preview';
import { table } from './src/compts/Table/Table';
import { welcome } from './src/compts/Welcome/Welcome';
import { reason } from './src/compts/Reason/Reason';
import { mobApp } from './src/compts/MobApp/MobApp';
import './style.scss';
import { howUse } from './src/compts/HowUse/HowUse';
import { review } from './src/compts/Review/Reviews';
import { modelPhone } from './src/compts/ModelPhone/ModelPhone';
import { cricket } from './src/compts/Cricket/Cricket';
import { faq } from './src/compts/Faq/Faq';
import { howDown } from './src/compts/HowDown/HowDown';
import { footer } from './src/compts/Footer/Footer';

const components = [
  header,
  welcome,
  table,
  preview,
  download,
  bet,
  bonus,
  reason,
  mobApp,
  howUse,
  review,
  modelPhone,
  cricket,
  howDown,
  faq,
  footer,
];

document.querySelector('#app').innerHTML = components.join('\n');

const tableList = document.querySelector('.table__content');
tableList.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    tableList.scrollLeft +=
      (tableList.scrollWidth / 100) * Math.sign(event.deltaY);
    event.preventDefault();
  }
});

const previewTitle = document.querySelector('.preview__title');
const previewText = document.querySelector('.preview__text');
const previewLeftArrow = document.querySelector('.preview__button-left');
const previewRightArrow = document.querySelector('.preview__button-right');
const previewList = document.querySelector('.preview__list');

function changeContentPreview(value) {
  previewTitle.textContent = arrItemPreview[value].title;
  previewText.textContent = arrItemPreview[value].text;

  previewTitle.dataset.id = arrItemPreview[value].id;
  previewText.dataset.id = arrItemPreview[value].id;

  previewList.innerHTML = createItemPreview(arrItemPreview, value);
}

changeContentPreview(0);
previewRightArrow.addEventListener('click', () => {
  const currentIdItem = Number(previewTitle.dataset.id);

  if (currentIdItem === arrItemPreview.length - 1) {
    return;
  } else {
    changeContentPreview(currentIdItem + 1);
    previewList.innerHTML = createItemPreview(
      arrItemPreview,
      currentIdItem + 1
    );
  }
});

previewLeftArrow.addEventListener('click', () => {
  const currentIdItem = Number(previewTitle.dataset.id);

  if (currentIdItem === 0) {
    return;
  } else {
    changeContentPreview(currentIdItem - 1);
    previewList.innerHTML = createItemPreview(
      arrItemPreview,
      currentIdItem - 1
    );
  }
});
/*  */
const betList = document.querySelector('.bet__wrapper-cards');
const betLeftArrow = document.querySelector('.bet__button-left');
const betRightArrow = document.querySelector('.bet__button-right');

betList.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    betList.scrollLeft += (betList.scrollWidth / 100) * Math.sign(event.deltaY);
    event.preventDefault();
  }
});

betLeftArrow.addEventListener('click', () => {
  const betCardWidth = document.querySelector('.bet__item').clientWidth / 2;
  betList.scrollLeft -= betCardWidth;
});

betRightArrow.addEventListener('click', () => {
  const betCardWidth = document.querySelector('.bet__item').clientWidth / 2;
  betList.scrollLeft += betCardWidth;
});
/*  */
const reviewList = document.querySelector('.review__wrapper-cards');
const reviewLeftArrow = document.querySelector('.review__button-left');
const reviewRightArrow = document.querySelector('.review__button-right');

reviewList.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    reviewList.scrollLeft +=
      (reviewList.scrollWidth / 100) * Math.sign(event.deltaY);
    event.preventDefault();
  }
});

reviewLeftArrow.addEventListener('click', () => {
  const reviewCardWidth =
    document.querySelector('.review__item').clientWidth / 2;
  reviewList.scrollLeft -= reviewCardWidth;
});

reviewRightArrow.addEventListener('click', () => {
  const reviewCardWidth =
    document.querySelector('.review__item').clientWidth / 2;
  reviewList.scrollLeft += reviewCardWidth;
});
/*  */
const modelPhoneList1 = document.querySelector('.model-phone__list-1');
const modelPhoneList2 = document.querySelector('.model-phone__list-2');

modelPhoneList1.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    modelPhoneList1.scrollLeft +=
      (modelPhoneList1.scrollWidth / 100) * Math.sign(event.deltaY);
    event.preventDefault();
  }
});

modelPhoneList2.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    modelPhoneList2.scrollLeft +=
      (modelPhoneList2.scrollWidth / 100) * Math.sign(event.deltaY);
    event.preventDefault();
  }
});
/*  */
const cricketList = document.querySelector('.cricket__list');
cricketList.addEventListener('wheel', (event) => {
  if (event.deltaY !== 0) {
    cricketList.scrollLeft +=
      (cricketList.scrollWidth / 100) * Math.sign(event.deltaY);
    event.preventDefault();
  }
});

