document.addEventListener('DOMContentLoaded', function() {
    // Элементы страниц
    const mainScreen = document.getElementById('main-screen');
    const aboutScreen = document.getElementById('about-screen');
    const whyUsScreen = document.getElementById('why-us-screen');
    const portfolioScreen = document.getElementById('portfolio-screen');
    const successScreen = document.getElementById('success-screen');
    
    // Модальные окна
    const calcModal = document.getElementById('calc-modal');
    const orderModal = document.getElementById('order-modal');
    
    // Кнопки открытия модальных окон
    const openCalcBtn = document.getElementById('open-calc-modal');
    const openOrderBtn = document.getElementById('open-order-modal');
    const openAboutBtn = document.getElementById('open-about-screen');
    const openPortfolioBtn = document.getElementById('open-portfolio-screen');
    const orderFromCalcBtn = document.getElementById('order-from-calc');
    
    // Кнопки закрытия модальных окон
    const closeCalcBtn = document.getElementById('close-calc-modal');
    const closeOrderBtn = document.getElementById('close-order-modal');
    
    // Кнопки возврата
    const backFromAbout = document.getElementById('back-from-about');
    const backFromWhyUs = document.getElementById('back-from-why-us');
    const backFromPortfolio = document.getElementById('back-from-portfolio');
    const backFromSuccess = document.getElementById('back-from-success');
    
    // Форма заказа
    const orderForm = document.getElementById('order-form');
    
    // Открытие модального окна расчета стоимости
    openCalcBtn.addEventListener('click', function() {
        calcModal.style.display = 'block';
    });
    
    // Открытие модального окна заказа
    openOrderBtn.addEventListener('click', function() {
        orderModal.style.display = 'block';
    });
    
    // Открытие экрана "О НАС"
    openAboutBtn.addEventListener('click', function() {
        mainScreen.style.display = 'none';
        aboutScreen.style.display = 'block';
    });
    
    // Открытие экрана портфолио
    openPortfolioBtn.addEventListener('click', function() {
        mainScreen.style.display = 'none';
        portfolioScreen.style.display = 'block';
    });
    
    // Переход от расчета стоимости к заказу
    orderFromCalcBtn.addEventListener('click', function() {
        calcModal.style.display = 'none';
        orderModal.style.display = 'block';
    });
    
    // Закрытие модальных окон
    closeCalcBtn.addEventListener('click', function() {
        calcModal.style.display = 'none';
    });
    
    closeOrderBtn.addEventListener('click', function() {
        orderModal.style.display = 'none';
    });
    
    // Обработка формы заказа
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        orderModal.style.display = 'none';
        mainScreen.style.display = 'none';
        successScreen.style.display = 'block';
    });
    
    // Возврат на главный экран
    backFromAbout.addEventListener('click', function(e) {
        e.preventDefault();
        aboutScreen.style.display = 'none';
        mainScreen.style.display = 'flex';
    });
    
    backFromWhyUs.addEventListener('click', function(e) {
        e.preventDefault();
        whyUsScreen.style.display = 'none';
        mainScreen.style.display = 'flex';
    });
    
    backFromPortfolio.addEventListener('click', function(e) {
        e.preventDefault();
        portfolioScreen.style.display = 'none';
        mainScreen.style.display = 'flex';
    });
    
    backFromSuccess.addEventListener('click', function(e) {
        e.preventDefault();
        successScreen.style.display = 'none';
        mainScreen.style.display = 'flex';
    });
    
    // Закрытие модальных окон при клике вне их
    window.addEventListener('click', function(e) {
        if (e.target === calcModal) {
            calcModal.style.display = 'none';
        }
        if (e.target === orderModal) {
            orderModal.style.display = 'none';
        }
    });
    
    // Покажем "Почему мы?" при клике на логотип
    document.querySelector('.logo').addEventListener('click', function() {
        mainScreen.style.display = 'none';
        whyUsScreen.style.display = 'block';
    });
});
