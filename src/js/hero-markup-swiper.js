/**
  |============================
  | Розмітка Swiper
  |============================
*/
export default function markupEvents(params) {
    const{cook,topic}=params
        return params.map(elem=>{
            return `<div class="swiper-slide">
            <div class="swiper-desing">
                <img class="shef-photo"
                    src="${elem.cook.imgUrl}" srcset="${elem.cook.imgWebpUrl}" alt="${elem.cook.name}">
            <div class="hero-dish-general">
            <img class="hero-dish-photo-small"
            src="${elem.topic.previewUrl}" srcset="${elem.topic.previewWebpUrl}" alt="${elem.topic.name}">
                <h2 class="hero-dish-title">${elem.topic.name}</h2>
                <p class="hero-dish-origin">${elem.topic.area}</p>
            </div>
            <div class="hero-dish-photo" style="background-image: url(${elem.topic.previewUrl})"> 
            </div>
        </div>
        </div>`
        }).join('')
};