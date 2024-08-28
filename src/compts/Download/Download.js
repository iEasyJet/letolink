import googlePlay from '../../imgs/download/googlepaly.png';
import appstore from '../../imgs/download/appstore.png';
import donload from '../../imgs/download/download.png';

export const download = `
      <section class="download">
        <div class="download__wrapper-1">
          <div class="download__wrapper-2">
            <h2 class="download__title">IPL Win Betting App Download</h2>
            <p class="download__text">
              With our app, you can watch live broadcasts and receive countless
              statistics, tips, and even match predictions which will help you
              place better bets and improve your odds of winning. There are many
              betting apps out there. But rarely will you find a more
              comprehensive and a more user-friendly app for Android and iOS.
              Explore the app and you will find many useful features.
            </p>
            <ul class="download__list">
              <li class="download__item">
                <img
                  class="download__item-icon"
                  src=${googlePlay}
                  alt="Google Play"
                />
              </li>
              <li class="download__item">
                <img
                  class="download__item-icon"
                  src=${appstore}
                  alt="App Store"
                />
              </li>
            </ul>
          </div>
          <img
            class="download__img"
            src=${donload}
            alt="Phone"
          />
        </div>
      </section>
`;
