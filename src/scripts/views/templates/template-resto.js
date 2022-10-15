import CONFIG from '../../globals/config';

const buatTemplateDetailResto = (restaurant) => `
  <h2 class="rest__title">${restaurant.name}</h2>
  <img class="rest__poster" src="${CONFIG.BASE_IMAGE_URL_M + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="rest__info">
  <h3>Informasi</h3>
    <h4>Lokasi Restoran</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat Restoran</h4>
    <p>${restaurant.address}</p>
    <h4>Nilai Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="rest__overview">
    <h3>Kategori</h3>
    <p>${restaurant.categories.map((category) => `<span class="category"> ${category.name}</span>`).join('')}</p>
    <h3>Makanan</h3>
    <ul>
      ${restaurant.menus.foods.map((food) => `<li> ${food.name}</li>`).join('')}
    </ul>
    <h3>Minuman</h3>
    <ul>
      ${restaurant.menus.drinks.map((drink) => `<li> ${drink.name}</li>`).join('')}
    </ul>
    
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const buatTemplateItemResto = (resto) => `

  <div class="resto-item">
    <a href="#/detail/${resto.id}" tabindex="0">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" src="${CONFIG.BASE_IMAGE_URL_S + resto.pictureId}" alt="restoran ${resto.name}">
      <div class="kota">${resto.city}</div>
      <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>

    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
    </a>
  </div>
  `;

const buatTemplateTombolSuka = () => `
  <button aria-label="Suka Restoran Ini" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const buatTemplateTombolGakSuka = () => `
  <button aria-label="Gak Suka Restoran Ini" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  buatTemplateItemResto,
  buatTemplateDetailResto,
  buatTemplateTombolSuka,
  buatTemplateTombolGakSuka,
};
