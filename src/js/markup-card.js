const defaults = {
    title: 'Title not found',
    description: 'Description not found',
    thumb: 'https://demofree.sirv.com/nope-not-here.jpg?w=150',
    rating: 'XX',
}

function create(res) {
    elem.innerHTML=createMarkup(res.data)
    console.log(res);
}
function createMarkup(params) {
    return  `
    <div class="photo-card">
        <div class="photo-thumb">
          <img class="photo-img" src="${params.results[0].thumb || defaults.thumb}" alt="${params.results[0].title || defaults.title}" loading="lazy" />
        </div>
        <div class="photo-wrapper">
                <svg width="22" height="22">
                  <use href="./images/icons.svg#heart"></use>
                </svg>
        </div>
        <div class="info">
            <p class="info-title">
                  ${params.results[0].title || defaults.title}
            </p>
            <p class="info-text">
                ${params.results[0].description || defaults.description}
            </p>
            <div class="info-rating">
            ${params.results[0].rating || defaults.description}
                <svg width="22" height="22">
                  <use href="./images/icons.svg#star"></use>
                </svg>
            </div>
              <button class="info-btn">
                 See recipe
              </button>
          </div>
    </div>
  `;
};
export {create}