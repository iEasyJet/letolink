import { download } from './src/compts/Download/Download';
import { header } from './src/compts/Header/Header';
import {
  preview,
  arrItemPreview,
  createItemPreview,
} from './src/compts/Preview/Preview';
import { table } from './src/compts/Table/Table';
import { welcome } from './src/compts/Welcome/Welcome';
import './style.scss';

const components = [header, welcome, table, preview, download];
/* document.querySelector('#app').innerHTML = components.join('\n'); */

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

