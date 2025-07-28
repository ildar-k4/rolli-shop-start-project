// Div внутри корзины, в который мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function(e){
    
    // Проверем что клик был совершён по кнопке "Добавить в корзину"
    if(e.target.hasAttribute('data-cart')){
        
        // Находим карточку с товаром, внутри которой был совершен клик
        const card = e.target.closest('.card')

        // Собираем данные с этого товара и записываем их в единый объект продукт productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }

        // Проверяем если ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        // Если товар есть в корзине
        if(itemInCart){
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            // Если товара нет в корзине

            // Собранные данные поставим в шаблон для товаров в корзине
            const cartItemHTML = `<article class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                        </div>
                                        <div class="cart-item__desc">
                                            <h3 class="cart-item__title">${productInfo.title}</h3>
                                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                            <div class="cart-item__details">
                                                <div class="items items--small counter-wrapper">
                                                    <button class="items__control" data-action="minus" aria-label="Уменьшить количество">-</button>
                                                    <span class="items__current" data-counter>${productInfo.counter}</span>
                                                    <button class="items__control" data-action="plus" aria-label="Увеличить количество">+</button>
                                                </div>

                                                <div class="price">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>`

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        // Сбрасываем счетчик добавленного товара на единицу
        card.querySelector('[data-counter]').innerText = '1';

        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();

        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery()
    }
})