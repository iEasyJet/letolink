import { createUnversalSlider } from '../UniversalSlider/UniversalSlider';

const arrItemBet = [
  {
    title: 'Rajiv Gandhi International Stadium, Hyderabad',
    time: 'Sunday, May 19 17:30 pm IST',
    linkLogoTeam1: './src/imgs/bet/logoteam.png',
    team1: 'Sunreser Hyderabad',
    prim1: '(19.1 OV)',
    linkLogoTeam2: './src/imgs/bet/logoteam.png',
    team2: 'Xunreser Hyderabad',
    prim2: '(20.1 OV)',
    link: '#',
  },
  {
    title: 'Rajiv Gandhi International Stadium, Hyderabad',
    time: 'Sunday, May 19 17:30 pm IST',
    linkLogoTeam1: './src/imgs/bet/logoteam.png',
    team1: 'Sunreser Hyderabad',
    prim1: '(19.1 OV)',
    linkLogoTeam2: './src/imgs/bet/logoteam.png',
    team2: 'Xunreser Hyderabad',
    prim2: '(20.1 OV)',
    link: '#',
  },
  {
    title: 'Rajiv Gandhi International Stadium, Hyderabad',
    time: 'Sunday, May 19 17:30 pm IST',
    linkLogoTeam1: './src/imgs/bet/logoteam.png',
    team1: 'Sunreser Hyderabad',
    prim1: '(19.1 OV)',
    linkLogoTeam2: './src/imgs/bet/logoteam.png',
    team2: 'Xunreser Hyderabad',
    prim2: '(20.1 OV)',
    link: '#',
  },
  {
    title: 'Rajiv Gandhi International Stadium, Hyderabad',
    time: 'Sunday, May 19 17:30 pm IST',
    linkLogoTeam1: './src/imgs/bet/logoteam.png',
    team1: 'Sunreser Hyderabad',
    prim1: '(19.1 OV)',
    linkLogoTeam2: './src/imgs/bet/logoteam.png',
    team2: 'Xunreser Hyderabad',
    prim2: '(20.1 OV)',
    link: '#',
  },
  {
    title: 'Rajiv Gandhi International Stadium, Hyderabad',
    time: 'Sunday, May 19 17:30 pm IST',
    linkLogoTeam1: './src/imgs/bet/logoteam.png',
    team1: 'Sunreser Hyderabad',
    prim1: '(19.1 OV)',
    linkLogoTeam2: './src/imgs/bet/logoteam.png',
    team2: 'Xunreser Hyderabad',
    prim2: '(20.1 OV)',
    link: '#',
  },
];

function createItemBet() {
  const res = arrItemBet.map((el) => {
    return `
            <li class="bet__item">
              <div class="bet__wrapper-item-text">
                <h4 class="bet__item-title">
                  ${el.title}
                </h4>
                <p class="bet__item-time">${el.time}</p>
              </div>
              <div class="bet__wrapper-teams">
                <div class="bet__wrapper-team">
                  <img
                    class="bet__img-team"
                    src="${el.linkLogoTeam1}"
                    alt="Logo Team ${el.team1}"
                  />
                  <div class="bet__container">
                    <h5 class="bet__title-team">${el.team1}</h5>
                    <p class="bet__prim">${el.prim1}</p>
                  </div>
                </div>
                <img
                  class="bet__vs-team"
                  src="./src/imgs/bet/vs.png"
                  alt="vs"
                />
                <div class="bet__wrapper-team">
                  <img
                    class="bet__img-team"
                    src="${el.linkLogoTeam2}"
                    alt="Logo Team ${el.team2}"
                  />
                  <div class="bet__container">
                    <h5 class="bet__title-team">${el.team2}</h5>
                    <p class="bet__prim">${el.prim2}</p>
                  </div>
                </div>
              </div>
              <a class="bet__item-link" href="${el.link}">Bet Now</a>
            </li>
    `;
  });
  return res.join('\n');
}

/* export const bet = `
      <section class="bet">
        <div class="bet__wrapper-1">
          <div class="bet__wrapper-2">
            <h2 class="bet__title">IPL Live Cricket Betting</h2>
            <div class="bet__wrapper-buttons">
              <button class="bet__button bet__button-left" type="button">
                <span class="material-symbols-outlined"> chevron_left </span>
              </button>
              <button class="bet__button bet__button-right" type="button">
                <span class="material-symbols-outlined"> chevron_right </span>
              </button>
            </div>
          </div>
          <ul class="bet__wrapper-cards">
            ${createItemBet()}
          </ul>
        </div>
      </section>
`; */
export const bet = createUnversalSlider('bet', createItemBet());
