import check from '../../imgs/mobApp/check.png';
import mobAp from '../../imgs/mobApp/mob-app.png';

export const mobApp = `
      <section class="mob-app">
        <div class="mob-app__wrapper-1">
          <div class="mob-app__wrapper-2">
            <img
              src=${mobAp}
              alt="mobile app"
              class="mob-app__img"
            />
            <div class="mob-app__wrapper-3">
              <div class="mob-app__wrapper-text">
                <h2 class="mob-app__title">IPL mobile app features</h2>
                <p class="mob-app__text">
                  The IPL betting app offers a user-friendly mobile interface
                  that allows users to place bets anytime, anywhere. Enjoy
                  features like secure transactions, detailed match statistics
                  and personalized notifications for an immersive and
                  hassle-free betting experience on the go.
                </p>
                <ul class="mob-app__list">
                  <li class="mob-app__item">
                    <img
                      class="mob-app__item-img"
                      src=${check}
                      alt="check"
                    />
                    You can place bets on IPL games. You can also play casino
                    games.
                  </li>
                  <li class="mob-app__item">
                    <img
                      class="mob-app__item-img"
                      src=${check}
                      alt="check"
                    />
                    It offers cricket tips, stats, and predictions.
                  </li>
                  <li class="mob-app__item">
                    <img
                      class="mob-app__item-img"
                      src=${check}
                      alt="check"
                    />
                    There is customer support for your convenience.
                  </li>
                </ul>
              </div>
              <a href="#" class="mob-app__link">Bet Now</a>
            </div>
          </div>
        </div>
      </section>
`;
