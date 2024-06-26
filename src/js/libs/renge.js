function updatePriceRange() {

  const minPrice = document.getElementById('min-price').value;
  const maxPrice = document.getElementById('max-price').value;

  document.getElementById('min-price-display').innerText = `${minPrice}`;
  document.getElementById('max-price-display').innerText = `${maxPrice}`;

  const minValue = 1.0762;
  const maxValue = 1.0810;

  const minProgress = ((minPrice - minValue) / (maxValue - minValue)) * 100;
  const maxProgress = ((maxPrice - minValue) / (maxValue - minValue)) * 100;

  const minProgressBar = document.getElementById('progress-bar-inner');
  const maxProgressBar = document.getElementById('progress-wrapper-inner');

  minProgressBar.style.width = `${minProgress}%`;
  minProgressBar.style.backgroundColor = '#539100';

  maxProgressBar.style.width = `${maxProgress}%`;
  maxProgressBar.style.backgroundColor = '#CC5249';
}


updatePriceRange();



