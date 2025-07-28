
window.addEventListener('click', function(e){
    
    let counter; 

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if(e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus'){

        // Находим обертку счетчика
        const counterWrapper = e.target.closest('.counter-wrapper');
    
        counter = counterWrapper.querySelector('[data-counter]');
    }
    

    // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
    if(e.target.dataset.action === 'plus'){

        counter.innerText = ++counter.innerText;

    }

        
    // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
    if(e.target.dataset.action === 'minus'){

        if(parseInt(counter.innerText) > 1){

            counter.innerText = --counter.innerText;
            
        } else if(e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            // Проверка на товар который находится в корзине

            //  Удаляем товар из корзины
            e.target.closest('.cart-item').remove();

            // Отображение статуса корзины Пустая / Полная
            toggleCartStatus();

            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery()
        }
    }

    // Проверяем клик на + или - внутри корзины 
    if(e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')){
        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery()
    }
})