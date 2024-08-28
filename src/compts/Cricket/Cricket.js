const arrItemCricket = [
  {
    title: 'Mobile platform',
    text: 'Android',
    order: 1,
  },
  {
    title: 'Region',
    text: 'India',
    order: 2,
  },
  {
    title: 'Language',
    text: 'English, Hindi, Bengali, Telugu, Marathi, Tamil',
    order: 3,
  },
  {
    title: 'Bonus',
    text: 'Welcome bonus',
    order: 4,
  },
  {
    title: 'Casino games',
    text: 'Many real cash casino games',
    order: 5,
  },
  {
    title: 'Withdrawal',
    text: 'Instant',
    order: 6,
  },
];

function createItemCricket() {
  const res = arrItemCricket.map((el) => {
    return `
              <li class="cricket__item">
                <h4 class="cricket__item-title">${el.title}</h4>
                <div class="cricket__item-wrapper">
                  <p class="cricket__item-text">${el.text}</p>
                  <p class="cricket__item-order">${el.order}</p>
                </div>
              </li>
    `;
  });

  return res.join('\n');
}

export const cricket = `
      <section class="cricket">
        <div class="cricket__wrapper-1">
          <div class="cricket__wrapper-2">
            <h2 class="cricket__title">Cricket betting App main information</h2>
            <ul class="cricket__list">
              ${createItemCricket()}
            </ul>
          </div>
        </div>
      </section>
`;
