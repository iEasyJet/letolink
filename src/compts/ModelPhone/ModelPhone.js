const arrItemModelPhone = [
  {
    title: 'apple',
    imgLink: './src/imgs/modelPhone/apple.png',
  },
  {
    title: 'honor',
    imgLink: './src/imgs/modelPhone/honor.png',
  },
  {
    title: 'htc',
    imgLink: './src/imgs/modelPhone/htc.png',
  },
  {
    title: 'huawei',
    imgLink: './src/imgs/modelPhone/huawei.png',
  },
  {
    title: 'lg',
    imgLink: './src/imgs/modelPhone/lg.png',
  },
  {
    title: 'samsung',
    imgLink: './src/imgs/modelPhone/samsung.png',
  },
  {
    title: 'vivo',
    imgLink: './src/imgs/modelPhone/vivo.png',
  },
  {
    title: 'xiaomi',
    imgLink: './src/imgs/modelPhone/xiaomi.png',
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
