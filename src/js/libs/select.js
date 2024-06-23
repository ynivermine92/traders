document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('card-selector');
  const cards = document.querySelectorAll('.card');

  select.addEventListener('change', function() {
      const selectedValue = select.value;

      cards.forEach(function(card) {
          if (card.id === selectedValue) {
              card.classList.add('active');
          } else {
              card.classList.remove('active');
          }
      });
  });

  // Инициализация: показываем первую карточку по умолчанию
  if (cards.length > 0) {
      cards[0].classList.add('active');
  }
});
