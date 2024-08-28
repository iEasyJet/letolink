const arrNav = [
  {
    title: 'Indian Premier League',
    classIsWide: true,
    link: '#anchor1',
  },
  {
    title: 'IPL App Download',
    classIsWide: true,
    link: '#anchor2',
  },
  {
    title: 'IPL Cricket Betting',
    classIsWide: true,
    link: '#anchor3',
  },
  {
    title: 'Welcome Bonus',
    classIsWide: true,
    link: '#anchor4',
  },
  {
    title: 'Reasons to Download',
    classIsWide: true,
    link: '#anchor5',
  },
  {
    title: 'IPL mobile features',
    classIsWide: false,
    link: '#anchor6',
  },
  {
    title: 'How to use ?',
    classIsWide: false,
    link: '#anchor7',
  },
  {
    title: 'Reviews',
    classIsWide: false,
    link: '#anchor8',
  },
  {
    title: 'Main information',
    classIsWide: false,
    link: '#anchor9',
  },
  {
    title: 'IPL prediction app',
    classIsWide: false,
    link: '#anchor10',
  },
  {
    title: 'FAQ',
    classIsWide: false,
    link: '#anchor11',
  },
];

function createItemTable(isWide) {
  const res = arrNav
    .filter((el) => {
      return el.classIsWide === isWide;
    })
    .map((el) => {
      return `
      <li class="table__item ${
        el.classIsWide ? 'table__item_wide' : 'table__item_narrow'
      }">
        <a href="${el.link}" class="table__link">${el.title}</a>
      </li>
    `;
    });
  return res.join('\n');
}

export const table = `
      <section class="table">
        <div class="table__wrapper">
          <div class="table__wrapper-text">
            <h2 class="table__title">Table of Contents</h2>
            <p class="table__update">Update: 07.05.2024</p>
          </div>
          <nav class="table__content">
            <ul class="table__list table__list-wide">
              ${createItemTable(true)}
            </ul>
            <ul class="table__list table__list-narrow">
              ${createItemTable(false)}
            </ul>
          </nav>
        </div>
      </section>
  `;
