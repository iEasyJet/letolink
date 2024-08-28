import fb from '../../imgs/footer/facebook.png';
import x from '../../imgs/footer/x.png';
import tg from '../../imgs/footer/telegram.png';
import inst from '../../imgs/footer/instagram.png';

export const footer = `
      <footer class="footer">
        <div class="footer__wrapper-1">
          <div class="footer__wrapper-2">
            <ul class="footer__list-links">
              <li>
                <a class="footer__link" href="#"
                  ><img src=${fb} alt="facebook"
                /></a>
              </li>
              <li>
                <a class="footer__link" href="#"
                  ><img src=${x} alt="x"
                /></a>
              </li>
              <li>
                <a class="footer__link" href="#"
                  ><img src=${tg} alt="elegram"
                /></a>
              </li>
              <li>
                <a class="footer__link" href="#"
                  ><img src=${inst} alt="instagram"
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
      `;
