function calcCartPriceAndDelivery() {
    const cartItem = document.querySelectorAll('.cart-item');
    const totalPrice = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]')

    // Общая стоимость товара
    let priceTotal = 0;

    // Обходим все блоки с ценами в корзине
    cartItem.forEach(function (item) {

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        priceTotal += currentPrice;

    })

    // Отображаем цену на странице
    totalPrice.innerText = priceTotal;

    // Скрываем / показываем блок со стоимостью доставки
    if(priceTotal > 0){
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.add('none')
    }

    // Указываем стоимость доставки
    if(priceTotal >= 600) {

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '150 ₽'

    }
}