document.addEventListener('DOMContentLoaded', function() {
    function setupSelector(selectorId, cardClass) {
        const select = document.getElementById(selectorId);
        const cards = document.querySelectorAll(cardClass);

        function showSelectedCard() {
            const selectedValue = select.value;
            cards.forEach(function(card) {
                if (card.id === selectedValue) {
                    card.classList.add('active');
                    card.style.display = 'block'; 
                } else {
                    card.classList.remove('active');
                    card.style.display = 'none'; 
                }
            });
        }


        select.addEventListener('change', showSelectedCard);


        cards.forEach(card => card.style.display = 'none'); 
        const firstCard = document.getElementById(select.value);
        if (firstCard) {
            firstCard.style.display = 'block';
        }
    }


    setupSelector('card-selector', '.card');

    setupSelector('card-selector2', '.card2');
});
