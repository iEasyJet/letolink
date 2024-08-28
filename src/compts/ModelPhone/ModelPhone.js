import apple from '../../imgs/modelPhone/apple.png';
import honor from '../../imgs/modelPhone/honor.png';
import htc from '../../imgs/modelPhone/htc.png';
import huawei from '../../imgs/modelPhone/huawei.png';
import lg from '../../imgs/modelPhone/lg.png';
import samsung from '../../imgs/modelPhone/samsung.png';
import vivo from '../../imgs/modelPhone/vivo.png';
import xiaomi from '../../imgs/modelPhone/xiaomi.png';

const arrItemModelPhone = [
  {
    title: 'apple',
    imgLink: apple,
  },
  {
    title: 'honor',
    imgLink: honor,
  },
  {
    title: 'htc',
    imgLink: htc,
  },
  {
    title: 'huawei',
    imgLink: huawei,
  },
  {
    title: 'lg',
    imgLink: lg,
  },
  {
    title: 'samsung',
    imgLink: samsung,
  },
  {
    title: 'vivo',
    imgLink: vivo,
  },
  {
    title: 'xiaomi',
    imgLink: xiaomi,
  },
];

function createItemModelPhone(a, b) {
  const res = arrItemModelPhone.slice(a, b).map((el) => {
    return `
      <li class="model-phone__item">
        <img
          class="model-phone__img"
          src="${el.imgLink}"
          alt="Phone ${el.title}"
        />
      </li>`;
  });

  return res.join('');
}

export const modelPhone = `
      <section class="model-phone">
        <div class="model-phone__wrapper">
          <h2 class="model-phone__title">
            Download IPL win app for Android & IOS
          </h2>
          <ul class="model-phone__list model-phone__list-1">
            ${createItemModelPhone(0, 4)}
          </ul>
          <ul class="model-phone__list model-phone__list-2">
            ${createItemModelPhone(4, 8)}
          </ul>
        </div>
      </section>`;
