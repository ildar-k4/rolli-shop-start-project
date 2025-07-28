const productsContainer = document.querySelector('#products-container');

getProducts();

async function getProducts() {
    // Получаем данные из products.json
    const response = await fetch('./js/products.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();

    // Запускаем ф-ю рендера (отображение товаров)
    renderProducts(productsArray);
}


function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<article class="col-md-6">
                                <div class="card mb-4" data-id="${item.id}">
                                    <img class="product-img card-img-top" src="img/roll/${item.imgSrc}" alt="Филадельфия хит ролл">
                                    
                                    <div class="card-body text-center">
                                        <h2 class="item-title card-title">${item.title}</h2> 
                                        <p><small class="text-muted" data-items-in-box>${item.itemsInBox} шт.</small></p>

                                        <!--Счетчик-->
                                        <div class="details-wrapper">
                                            <div class="items counter-wrapper">
                                                <button class="items__control" data-action="minus" aria-label="Уменьшить количество">-</button>
                                                <!-- Заменено на <button> для доступности -->
                                                <span class="items__current" data-counter>1</span>
                                                <button class="items__control" data-action="plus" aria-label="Увеличить количество">+</button>
                                            </div>
                                            <!-- // Счетчик-->

                                            <div class="price">
                                                <div class="price__weight">${item.weight}г.</div>
                                                <div class="price__currency">${item.price} ₽</div>
                                            </div>
                                        </div>

                                        <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>
                                    </div>
                                </div>
                            </article>`
        productsContainer.insertAdjacentHTML('beforeend', productHTML)
    });
}