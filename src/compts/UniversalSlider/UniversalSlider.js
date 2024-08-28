export function createUnversalSlider(className, children) {
  return `
      <section class="unversal-slider">
        <div class="unversal-slider__wrapper-1">
          <div class="unversal-slider__wrapper-2">
            <h2 class="unversal-slider__title">IPL Live Cricket Betting</h2>
            <div class="unversal-slider__wrapper-buttons">
              <button class="unversal-slider__button ${className}__button-left" type="button">
                <span class="material-symbols-outlined"> chevron_left </span>
              </button>
              <button class="unversal-slider__button ${className}__button-right" type="button">
                <span class="material-symbols-outlined"> chevron_right </span>
              </button>
            </div>
          </div>
          <ul class="unversal-slider__wrapper-cards ${className}__wrapper-cards">
            ${children}
          </ul>
        </div>
      </section>
`;
}
