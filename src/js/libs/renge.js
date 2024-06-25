    function updatePriceRange() {
        const minPrice = document.getElementById('min-price').value;
        const maxPrice = document.getElementById('max-price').value;

        document.getElementById('min-price-display').innerText = `${minPrice}`;
        document.getElementById('max-price-display').innerText = `${maxPrice}`;
    }


