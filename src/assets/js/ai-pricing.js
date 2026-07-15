document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('#pricing-1087 .cs-toggle-btn');
    const priceViews = document.querySelectorAll('#pricing-1087 .cs-price-view');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.getAttribute('data-view');

            priceViews.forEach(el => {
                el.classList.toggle('cs-active', el.getAttribute('data-view') === view);
            });

            toggleButtons.forEach(btn => {
                btn.classList.toggle('cs-active', btn === button);
            });
        });
    });
});
