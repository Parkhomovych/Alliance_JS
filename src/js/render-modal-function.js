
// Фунуція для рейтенгу
function renderStarModal(rating) {
    const starBox = document.querySelector('.box-stars')
    const starColor = document.querySelector('.star')
    const starElements = [...starBox.children]
    const totalRating = Math.round(rating)
    starElements.forEach((el, i) => {
        if (i < totalRating) {
            el.classList.add('yellow-star')
        }
    })
};

// Функція для інгредієнтів
function createIngredientsModal(ingredients) {

    const ingredientsBox = document.querySelector('.modal-card-list');
    ingredientsBox.innerHTML = markupIngredientsModal(ingredients);

    function markupIngredientsModal(ingredients) {
      return ingredients.map(elem => {
        return `<li class="modal-card-item">
    <p>${elem.name}</p>
    <p>${elem.measure}</p>
    </li>`
      })
    };

  };

  // Функція для Tags
function createTagsModal(tags) {

    const tagsBox = document.querySelector('.modal-card-tags');
    tagsBox.innerHTML = markupIngredientsModal(tags);

    function markupIngredientsModal(tags) {
      return tags.map(elem => {
        return `<li class="modal-card-tag">#${elem}</li>`
      })
    };

  };

  export{createIngredientsModal,renderStarModal,createTagsModal}