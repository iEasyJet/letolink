(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();function y(e,t){return`
      <section class="unversal-slider">
        <div class="unversal-slider__wrapper-1">
          <div class="unversal-slider__wrapper-2">
            <h2 class="unversal-slider__title">IPL Live Cricket Betting</h2>
            <div class="unversal-slider__wrapper-buttons">
              <button class="unversal-slider__button ${e}__button-left" type="button">
                <span class="material-symbols-outlined"> chevron_left </span>
              </button>
              <button class="unversal-slider__button ${e}__button-right" type="button">
                <span class="material-symbols-outlined"> chevron_right </span>
              </button>
            </div>
          </div>
          <ul class="unversal-slider__wrapper-cards ${e}__wrapper-cards">
            ${t}
          </ul>
        </div>
      </section>
`}const k=[{title:"Rajiv Gandhi International Stadium, Hyderabad",time:"Sunday, May 19 17:30 pm IST",linkLogoTeam1:"./src/imgs/bet/logoteam.png",team1:"Sunreser Hyderabad",prim1:"(19.1 OV)",linkLogoTeam2:"./src/imgs/bet/logoteam.png",team2:"Xunreser Hyderabad",prim2:"(20.1 OV)",link:"#"},{title:"Rajiv Gandhi International Stadium, Hyderabad",time:"Sunday, May 19 17:30 pm IST",linkLogoTeam1:"./src/imgs/bet/logoteam.png",team1:"Sunreser Hyderabad",prim1:"(19.1 OV)",linkLogoTeam2:"./src/imgs/bet/logoteam.png",team2:"Xunreser Hyderabad",prim2:"(20.1 OV)",link:"#"},{title:"Rajiv Gandhi International Stadium, Hyderabad",time:"Sunday, May 19 17:30 pm IST",linkLogoTeam1:"./src/imgs/bet/logoteam.png",team1:"Sunreser Hyderabad",prim1:"(19.1 OV)",linkLogoTeam2:"./src/imgs/bet/logoteam.png",team2:"Xunreser Hyderabad",prim2:"(20.1 OV)",link:"#"},{title:"Rajiv Gandhi International Stadium, Hyderabad",time:"Sunday, May 19 17:30 pm IST",linkLogoTeam1:"./src/imgs/bet/logoteam.png",team1:"Sunreser Hyderabad",prim1:"(19.1 OV)",linkLogoTeam2:"./src/imgs/bet/logoteam.png",team2:"Xunreser Hyderabad",prim2:"(20.1 OV)",link:"#"},{title:"Rajiv Gandhi International Stadium, Hyderabad",time:"Sunday, May 19 17:30 pm IST",linkLogoTeam1:"./src/imgs/bet/logoteam.png",team1:"Sunreser Hyderabad",prim1:"(19.1 OV)",linkLogoTeam2:"./src/imgs/bet/logoteam.png",team2:"Xunreser Hyderabad",prim2:"(20.1 OV)",link:"#"}];function L(){return k.map(t=>`
            <li class="bet__item">
              <div class="bet__wrapper-item-text">
                <h4 class="bet__item-title">
                  ${t.title}
                </h4>
                <p class="bet__item-time">${t.time}</p>
              </div>
              <div class="bet__wrapper-teams">
                <div class="bet__wrapper-team">
                  <img
                    class="bet__img-team"
                    src="${t.linkLogoTeam1}"
                    alt="Logo Team ${t.team1}"
                  />
                  <div class="bet__container">
                    <h5 class="bet__title-team">${t.team1}</h5>
                    <p class="bet__prim">${t.prim1}</p>
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
                    src="${t.linkLogoTeam2}"
                    alt="Logo Team ${t.team2}"
                  />
                  <div class="bet__container">
                    <h5 class="bet__title-team">${t.team2}</h5>
                    <p class="bet__prim">${t.prim2}</p>
                  </div>
                </div>
              </div>
              <a class="bet__item-link" href="${t.link}">Bet Now</a>
            </li>
    `).join(`
`)}const x=y("bet",L()),I=`
      <section class="bonus">
        <div class="bonus__wrapper-1">
          <div class="bonus__wrapper-2">
            <div class="bonus__wrapper-text">
              <h2 class="bonus__title">Welcome Bonus</h2>
              <p class="bonus__text">
                The IPL betting app offers a user-friendly mobile interface that
                allows users to place bets anytime, anywhere. Enjoy features
                like secure transactions, detailed match statistics and
                personalized notifications for an immersive and hassle-free
                betting experience on the go.
              </p>
            </div>
            <ul class="bonus__list">
              <li class="bonus__item">
                <img
                  class="bonus__img-item"
                  src="./src/imgs/bonus/freebet.png"
                  alt="Free bet"
                />
                <h4 class="bonus__title-item">Free Bet on Registration</h4>
                <p class="bonus__text-item">
                  Get started with a free bet worth $10 upon registration! No
                  deposit required. Start winning today!
                </p>
              </li>

              <li class="bonus__item">
                <img
                  class="bonus__img-item"
                  src="./src/imgs/bonus/deposit.png"
                  alt="Deposit"
                />
                <h4 class="bonus__title-item">Deposit of 100 dollars</h4>
                <p class="bonus__text-item">
                  Make your first deposit of $100 and unlock a 100% match bonus.
                  Boost your money into IPL betting action!
                </p>
              </li>

              <li class="bonus__item">
                <img
                  class="bonus__img-item"
                  src="./src/imgs/bonus/bonus.png"
                  alt="Bonus"
                />
                <h4 class="bonus__title-item">50% Bonus on First Deposit</h4>
                <p class="bonus__text-item">
                  Enjoy a 50% bonus on your initial deposit up to $200. Maximize
                  your first bet of IPL betting!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
`,P=`
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
                  src="./src/imgs/download/googlepaly.png"
                  alt="Google Play"
                />
              </li>
              <li class="download__item">
                <img
                  class="download__item-icon"
                  src="./src/imgs/download/appstore.png"
                  alt="App Store"
                />
              </li>
            </ul>
          </div>
          <img
            class="download__img"
            src="./src/imgs/download/download.png"
            alt="Phone"
          />
        </div>
      </section>
`,S=`
      <header class="header">
        <div class="header__wrapper">
          <a href="#" class="header__link-logo"
            ><img class="header__logo" src="./src/imgs/header/logo.png" alt="Logo" />BETTING APP</a
          >
          <input type="checkbox" id="burger-checkbox" class="header__burger-checkbox">
          <label for="burger-checkbox" class="header__burger"></label>
          
          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__item">
                <a href="#" class="header__link">Home</a>
              </li>
              <li class="header__item">
                <a href="#" class="header__link">IPL Download</a>
              </li>
              <li class="header__item">
                <a href="#" class="header__link">Bonus</a>
              </li>
              <li class="header__item">
                <a href="#" class="header__link">How to use?</a>
              </li>
              <li class="header__item">
                <a href="#" class="header__link">Reviews</a>
              </li>
              <li class="header__item">
                <a href="#" class="header__link">FAQ</a>
              </li>
            </ul>
          </nav>
          <button type="button" class="header__button">Bet Now</button>
      
        </div>
      </header>
`,r=[{id:0,title:"Indian Premier League",text:`IPL or the Indian Premier League is the world’s top men’s T20
                  cricket league. Organized by the BCCI, its first edition was
                  held in 2008. The latest edition of the league (2024) had 10
                  participating teams. The games are held all over India in
                  different cities. Most of the world’s top cricket players are
                  seen in this exciting league.`},{id:1,title:"Russia Premier League",text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur temporibus accusamus, aliquid facere dolores eum doloremque mollitia magnam facilis laborum perferendis impedit expedita totam maiores dignissimos nemo nisi, unde molestiae."}];function h(e,t){return e.map(l=>`
      <li class="preview__item ${l.id===t?"preview__item-active":""}"></li>
    `).join(`
`)}const T=`
      <section class="preview">
        <div class="preview__wrapper-1">
          <div class="preview__wrapper-2">
            <img
              class="preview__img"
              src="./src/imgs/preview/preview.png"
              alt="betting"
            />
            <div class="preview__wrapper-3">
              <div class="preview__wrapper-text">
                <h2 class="preview__title"></h2>
                <p class="preview__text">
                 
                </p>
              </div>
              <div class="preview__wrapper-slider">
                <button
                  class="preview__button preview__button-left"
                  type="button"
                >
                  <span class="material-symbols-outlined"> chevron_left </span>
                </button>
                <ul class="preview__list">

                </ul>
                <button
                  class="preview__button preview__button-right"
                  type="button"
                >
                  <span class="material-symbols-outlined"> chevron_right </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>`,A=[{title:"Indian Premier League",classIsWide:!0,link:"#anchor1"},{title:"IPL App Download",classIsWide:!0,link:"#anchor2"},{title:"IPL Cricket Betting",classIsWide:!0,link:"#anchor3"},{title:"Welcome Bonus",classIsWide:!0,link:"#anchor4"},{title:"Reasons to Download",classIsWide:!0,link:"#anchor5"},{title:"IPL mobile features",classIsWide:!1,link:"#anchor6"},{title:"How to use ?",classIsWide:!1,link:"#anchor7"},{title:"Reviews",classIsWide:!1,link:"#anchor8"},{title:"Main information",classIsWide:!1,link:"#anchor9"},{title:"IPL prediction app",classIsWide:!1,link:"#anchor10"},{title:"FAQ",classIsWide:!1,link:"#anchor11"}];function b(e){return A.filter(a=>a.classIsWide===e).map(a=>`
      <li class="table__item ${a.classIsWide?"table__item_wide":"table__item_narrow"}">
        <a href="${a.link}" class="table__link">${a.title}</a>
      </li>
    `).join(`
`)}const B=`
      <section class="table">
        <div class="table__wrapper">
          <div class="table__wrapper-text">
            <h2 class="table__title">Table of Contents</h2>
            <p class="table__update">Update: 07.05.2024</p>
          </div>
          <nav class="table__content">
            <ul class="table__list table__list-wide">
              ${b(!0)}
            </ul>
            <ul class="table__list table__list-narrow">
              ${b(!1)}
            </ul>
          </nav>
        </div>
      </section>
  `,H=`
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
                src="./src/imgs/welcome/subs.png"
                alt="subs"
              />
              <p class="welcome__subs-text">
                12k + People Already Joined IPL Betting Get Started Today !
              </p>
            </div>
          </div>
          <img
            class="welcome__subs"
            src="./src/imgs/welcome/person.png"
            alt="Person"
          />
        </div>
      </section>`,W=`
      <section class="universal-section">
        <div class="universal-section__wrapper">
          <h2 class="universal-section__title">Reasons to Download IPL App</h2>
          <ul class="universal-section__list">
            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="r1"
                checked="checked"
              />
              <label for="r1"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">
                  Cricket Betting App without your browser
                </h4>
                <p class="universal-section__item-text">
                  You can place the bets and see the result with just a few
                  touches. Just open the app, select the match, choose your
                  players, and start gambling. It is super easy.
                </p>
              </div>
            </li>

            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="r2"
                checked="checked"
              />
              <label for="r2"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">Only Phone Needed</h4>
                <p class="universal-section__item-text">
                  Download the app free on the Google Play Store or AppStore and
                  you are ready to go. All you need is just a smartphone. You
                  don’t need a laptop.
                </p>
              </div>
            </li>

            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="r3"
                checked="checked"
              />
              <label for="r3"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">
                  Easy to track your balance
                </h4>
                <p class="universal-section__item-text">
                  Download, install, and open the app. Inside, you will find all
                  the stats, tips, and match predictions. You can track and make
                  those winning decisions easily.
                </p>
              </div>
            </li>

            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="r4"
                checked="checked"
              />
              <label for="r4"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">Bets at any time</h4>
                <p class="universal-section__item-text">
                  You can place your bets and see the outcome anytime you want
                  and from anywhere. It is super convenient. Betting on your
                  favorite cricket game is sure to be thoroughly enjoyable.
                </p>
              </div>
            </li>
          </ul>
          <a href="#" class="universal-section__link">Learn more</a>
        </div>
      </section>
`,$=`
      <section class="mob-app">
        <div class="mob-app__wrapper-1">
          <div class="mob-app__wrapper-2">
            <img
              src="./src/imgs/mobApp/mob-app.png"
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
                      src="./src/imgs/mobApp/check.png"
                      alt="check"
                    />
                    You can place bets on IPL games. You can also play casino
                    games.
                  </li>
                  <li class="mob-app__item">
                    <img
                      class="mob-app__item-img"
                      src="./src/imgs/mobApp/check.png"
                      alt="check"
                    />
                    It offers cricket tips, stats, and predictions.
                  </li>
                  <li class="mob-app__item">
                    <img
                      class="mob-app__item-img"
                      src="./src/imgs/mobApp/check.png"
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
`,M=`
      <section class="universal-section">
        <div class="universal-section__wrapper">
          <h2 class="universal-section__title">How to use our IPL betting app?</h2>
          <ul class="universal-section__list">
            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="h1"
                checked="checked"
              />
              <label for="h1"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">
                  How to sign up in the app?
                </h4>
                <p class="universal-section__item-text">
                  Click on the app. Next, fill out the two-step
                  registration form. Enter your phone number and
                  create your password. A code will be sent to your phone.
                  Verify by entering this code. Click “Next” and you are ready
                  for online betting.
                </p>
              </div>
            </li>

            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="h2"
                checked="checked"
              />
              <label for="h2"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">How to deposit money in the app?</h4>
                <p class="universal-section__item-text">
                  You can deposit cash in various ways. Use your Mastercard or Visa.
                  You can also use Astropay, MuchBetter, and cryptocurrencies.
                  We accept bank transfers. Simply tap on Deposit and select your
                  preferred payment method. Fill in all the details and enter the
                  amount you want to deposit.
                </p>
              </div>
            </li>

            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="h3"
                checked="checked"
              />
              <label for="h3"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">
                  How to find IPL matches to bet?
                </h4>
                <p class="universal-section__item-text">
                  There are many sections where you can find the matches and place your bets.
                  There is a Live Bet section on the main screen.
                  You will see all available live bets here. Alternatively, you can visit
                  Sports -> Cricket -> India -> IPL. Here, you will see the odds for all
                  upcoming games.
                </p>
              </div>
            </li>
          </ul>
          <a href="#" class="universal-section__link">Learn more</a>
        </div>
      </section>
`,C=[{name:"Rajesh K",img:"./src/imgs/review/client.png",text:`I’ve tried several betting apps, but this one stands out. The live
            betting feature is excellent, and the customer support is
            responsive. Great bonuses too. Very satisfied!`},{name:"Rajesh K",img:"./src/imgs/review/client.png",text:`I’ve tried several betting apps, but this one stands out. The live
            betting feature is excellent, and the customer support is
            responsive. Great bonuses too. Very satisfied!`},{name:"Rajesh K",img:"./src/imgs/review/client.png",text:`I’ve tried several betting apps, but this one stands out. The live
            betting feature is excellent, and the customer support is
            responsive. Great bonuses too. Very satisfied!`}];function q(){return C.map(t=>`
      <li class="review__item">
        <img
          class="review__client-img"
          src="${t.img}"
          alt="client"
        />
        <div class="review__wrapper-card">
          <h4 class="review__item-title">${t.name}</h4>
          <ul class="review__stars">
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starPlus.png"
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starPlus.png"
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starPlus.png"
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starPlus.png"
                alt="star"
              />
            </li>
            <li class="review__item-star">
              <img
                class="review__item-star-img"
                src="./src/imgs/review/starMinus.png"
                alt="star"
              />
            </li>
          </ul>
          <p class="review__item-text">
            ${t.text}
          </p>
        </div>
      </li>
    `).join(`
`)}const j=y("review",q()),E=[{title:"apple",imgLink:"./src/imgs/modelPhone/apple.png"},{title:"honor",imgLink:"./src/imgs/modelPhone/honor.png"},{title:"htc",imgLink:"./src/imgs/modelPhone/htc.png"},{title:"huawei",imgLink:"./src/imgs/modelPhone/huawei.png"},{title:"lg",imgLink:"./src/imgs/modelPhone/lg.png"},{title:"samsung",imgLink:"./src/imgs/modelPhone/samsung.png"},{title:"vivo",imgLink:"./src/imgs/modelPhone/vivo.png"},{title:"xiaomi",imgLink:"./src/imgs/modelPhone/xiaomi.png"}];function w(e,t){return E.slice(e,t).map(l=>`
      <li class="model-phone__item">
        <img
          class="model-phone__img"
          src="${l.imgLink}"
          alt="Phone ${l.title}"
        />
      </li>`).join("")}const Y=`
      <section class="model-phone">
        <div class="model-phone__wrapper">
          <h2 class="model-phone__title">
            Download IPL win app for Android & IOS
          </h2>
          <ul class="model-phone__list model-phone__list-1">
            ${w(0,4)}
          </ul>
          <ul class="model-phone__list model-phone__list-2">
            ${w(4,8)}
          </ul>
        </div>
      </section>`,O=[{title:"Mobile platform",text:"Android",order:1},{title:"Region",text:"India",order:2},{title:"Language",text:"English, Hindi, Bengali, Telugu, Marathi, Tamil",order:3},{title:"Bonus",text:"Welcome bonus",order:4},{title:"Casino games",text:"Many real cash casino games",order:5},{title:"Withdrawal",text:"Instant",order:6}];function D(){return O.map(t=>`
              <li class="cricket__item">
                <h4 class="cricket__item-title">${t.title}</h4>
                <div class="cricket__item-wrapper">
                  <p class="cricket__item-text">${t.text}</p>
                  <p class="cricket__item-order">${t.order}</p>
                </div>
              </li>
    `).join(`
`)}const R=`
      <section class="cricket">
        <div class="cricket__wrapper-1">
          <div class="cricket__wrapper-2">
            <h2 class="cricket__title">Cricket betting App main information</h2>
            <ul class="cricket__list">
              ${D()}
            </ul>
          </div>
        </div>
      </section>
`,N=`
      <section class="universal-section">
        <div class="universal-section__wrapper">
          <h2 class="universal-section__title">FAQ</h2>
          <ul class="universal-section__list">
            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="f1"
                checked="checked"
              />
              <label for="f1"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">
                  How to sign up in the app?
                </h4>
                <p class="universal-section__item-text">
                  Click on the app. Next, fill out the two-step
                  registration form. Enter your phone number and
                  create your password. A code will be sent to your phone.
                  Verify by entering this code. Click “Next” and you are ready
                  for online betting.
                </p>
              </div>
            </li>

            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="f2"
                checked="checked"
              />
              <label for="f2"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">How to deposit money in the app?</h4>
                <p class="universal-section__item-text">
                  You can deposit cash in various ways. Use your Mastercard or Visa.
                  You can also use Astropay, MuchBetter, and cryptocurrencies.
                  We accept bank transfers. Simply tap on Deposit and select your
                  preferred payment method. Fill in all the details and enter the
                  amount you want to deposit.
                </p>
              </div>
            </li>

            <li class="universal-section__item">
              <input
                class="universal-section__item-button"
                type="checkbox"
                name="acor"
                id="f3"
                checked="checked"
              />
              <label for="f3"></label>
              <div class="universal-section__wrapper-text">
                <h4 class="universal-section__item-title">
                  How to find IPL matches to bet?
                </h4>
                <p class="universal-section__item-text">
                  There are many sections where you can find the matches and place your bets.
                  There is a Live Bet section on the main screen.
                  You will see all available live bets here. Alternatively, you can visit
                  Sports -> Cricket -> India -> IPL. Here, you will see the odds for all
                  upcoming games.
                </p>
              </div>
            </li>
          </ul>
          <a href="#" class="universal-section__link">Learn more</a>
        </div>
      </section>
`,V=`
      <section class="how-down">
        <div class="how-down__wrapper-1">
          <div class="how-down__wrapper-2">
            <div class="how-down__wrapper-text">
              <h2 class="how-down__title">
                How to download the IPL prediction app?
              </h2>
              <p class="how-down__text">
                The IPL betting app offers a user-friendly mobile interface that
                allows users to place bets anytime, anywhere. Enjoy features
                like secure transactions, detailed match
              </p>
            </div>

            <div class="how-down__wrapper-card">
              <img
                class="how-down__img"
                src="./src/imgs/howDown/android.png"
                alt="download android"
              />
              <div class="how-down__card-text-wrapper">
                <h4 class="how-down__card-title">
                  How to download betting app on android?
                </h4>
                <p class="how-down__card-text">
                  The IPL betting app offers a user-friendly mobile interface
                  that allows users to place bets anytime, anywhere. Enjoy
                  features like secure transactions, detailed match statistics
                  and personalized notifications for an immersive and
                  hassle-free betting experience on the go.
                </p>
                <a href="#" class="how-down__card-link">Bet Now</a>
              </div>
            </div>

            <div class="how-down__wrapper-card">
              <div class="how-down__card-text-wrapper">
                <h4 class="how-down__card-title">
                  How to download an online ipl cricket app on IOS?
                </h4>
                <p class="how-down__card-text">
                  All you have to do is just open the site on your phone. Sign
                  up, confirm, and you are ready to place the bets.
                </p>
                <a href="#" class="how-down__card-link">Bet Now</a>
              </div>
              <img
                class="how-down__img"
                src="./src/imgs/howDown/ios.png"
                alt="download ios"
              />
            </div>
          </div>
        </div>
      </section>
`,G=`
      <footer class="footer">
        <div class="footer__wrapper-1">
          <div class="footer__wrapper-2">
            <ul class="footer__list-links">
              <li>
                <a class="footer__link" href="#"
                  ><img src="./src/imgs/footer/facebook.png" alt="facebook"
                /></a>
              </li>
              <li>
                <a class="footer__link" href="#"
                  ><img src="./src/imgs/footer/x.png" alt="x"
                /></a>
              </li>
              <li>
                <a class="footer__link" href="#"
                  ><img src="./src/imgs/footer/telegram.png" alt="elegram"
                /></a>
              </li>
              <li>
                <a class="footer__link" href="#"
                  ><img src="./src/imgs/footer/instagram.png" alt="instagram"
                /></a>
              </li>
            </ul>

            <ul class="footer__list-other">
              <li>
                <a class="footer__link-other" href="#">Odds96</a>
              </li>
              <li>
                <a class="footer__link-other" href="#">Casino</a>
              </li>
              <li>
                <a class="footer__link-other" href="#">Aviator</a>
              </li>
              <li>
                <a class="footer__link-other" href="#">Cricket</a>
              </li>
              <li>
                <a class="footer__link-other" href="#">Bonuses</a>
              </li>
              <li>
                <a class="footer__link-other" href="#">App</a>
              </li>
            </ul>
          </div>
          <div class="footer__wrapper-3">
            <p class="footer__text">
              Best betting in India Lorem ipsum dolor sit amet
            </p>
            <ul class="footer__list-other">
              <li>
                <a class="footer__link-other" href="#">Reviews</a>
              </li>
              <li>
                <a class="footer__link-other" href="#">Legal</a>
              </li>
              <li>
                <a class="footer__link-other" href="#">Support</a>
              </li>
              <li>
                <a class="footer__link-other" href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      `,F=[S,H,B,T,P,x,I,W,$,M,j,Y,R,V,N,G];document.querySelector("#app").innerHTML=F.join(`
`);const p=document.querySelector(".table__content");p.addEventListener("wheel",e=>{e.deltaY!==0&&(p.scrollLeft+=p.scrollWidth/100*Math.sign(e.deltaY),e.preventDefault())});const c=document.querySelector(".preview__title"),f=document.querySelector(".preview__text"),z=document.querySelector(".preview__button-left"),U=document.querySelector(".preview__button-right"),v=document.querySelector(".preview__list");function g(e){c.textContent=r[e].title,f.textContent=r[e].text,c.dataset.id=r[e].id,f.dataset.id=r[e].id,v.innerHTML=h(r,e)}g(0);U.addEventListener("click",()=>{const e=Number(c.dataset.id);e!==r.length-1&&(g(e+1),v.innerHTML=h(r,e+1))});z.addEventListener("click",()=>{const e=Number(c.dataset.id);e!==0&&(g(e-1),v.innerHTML=h(r,e-1))});const o=document.querySelector(".bet__wrapper-cards"),X=document.querySelector(".bet__button-left"),K=document.querySelector(".bet__button-right");o.addEventListener("wheel",e=>{e.deltaY!==0&&(o.scrollLeft+=o.scrollWidth/100*Math.sign(e.deltaY),e.preventDefault())});X.addEventListener("click",()=>{const e=document.querySelector(".bet__item").clientWidth/2;o.scrollLeft-=e});K.addEventListener("click",()=>{const e=document.querySelector(".bet__item").clientWidth/2;o.scrollLeft+=e});const n=document.querySelector(".review__wrapper-cards"),Q=document.querySelector(".review__button-left"),J=document.querySelector(".review__button-right");n.addEventListener("wheel",e=>{e.deltaY!==0&&(n.scrollLeft+=n.scrollWidth/100*Math.sign(e.deltaY),e.preventDefault())});Q.addEventListener("click",()=>{const e=document.querySelector(".review__item").clientWidth/2;n.scrollLeft-=e});J.addEventListener("click",()=>{const e=document.querySelector(".review__item").clientWidth/2;n.scrollLeft+=e});const _=document.querySelector(".model-phone__list-1"),m=document.querySelector(".model-phone__list-2");_.addEventListener("wheel",e=>{e.deltaY!==0&&(_.scrollLeft+=_.scrollWidth/100*Math.sign(e.deltaY),e.preventDefault())});m.addEventListener("wheel",e=>{e.deltaY!==0&&(m.scrollLeft+=m.scrollWidth/100*Math.sign(e.deltaY),e.preventDefault())});const u=document.querySelector(".cricket__list");u.addEventListener("wheel",e=>{e.deltaY!==0&&(u.scrollLeft+=u.scrollWidth/100*Math.sign(e.deltaY),e.preventDefault())});
