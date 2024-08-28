import subs from '../../imgs/welcome/subs.png';
import person from '../../imgs/welcome/person.png';

export const welcome = `
      <section class="welcome">
        <div class="welcome__wrapper">
          <div class="welcome__container">
            <div class="welcome__container-text">
              <h1 class="welcome__title">Best IPL Betting App</h1>
              <p class="welcome__subtitle">
                Cricket betting is fun and exciting and the IPL is the world’s
                most exciting <br class="welcome__br-1" />
                T20 league. Bet money online on your favorite teams and players
                at the <br class="welcome__br-2" />
                world’s best IPL betting app. Our feature-rich app works on both
                Android
              </p>
              <button class="welcome__button" type="button">Bet Now</button>
            </div>
            <div class="welcome__wrapper-subs">
              <img
                class="welcome__subs-img"
                src=${subs}
                alt="subs"
              />
              <p class="welcome__subs-text">
                12k + People Already Joined IPL Betting Get Started Today !
              </p>
            </div>
          </div>
          <img
            class="welcome__subs"
            src=${person}
            alt="Person"
          />
        </div>
      </section>`;
