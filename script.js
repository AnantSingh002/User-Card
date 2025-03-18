document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('user-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const villageInput = document.getElementById('village');
    const cityInput = document.getElementById('city');
    const cardName = document.getElementById('card-name');
    const cardPhone = document.getElementById('card-phone');
    const cardVillage = document.getElementById('card-village');
    const cardCity = document.getElementById('card-city');
    const body = document.body;
    const lightModeButton = document.getElementById('light-mode');
    const darkModeButton = document.getElementById('dark-mode');

    // Load data from localif available
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    updateCard(userData);

    lightModeButton.addEventListener('click', () => {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    });

    darkModeButton.addEventListener('click', () => {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const userData = {
            name: nameInput.value,
            phone: phoneInput.value,
            village: villageInput.value,
            city: cityInput.value
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        updateCard(userData);
    });

    function updateCard(data) {
        cardName.textContent = data.name || '';
        cardPhone.textContent = data.phone || '';
        cardVillage.textContent = data.village || '';
        cardCity.textContent = data.city || '';
    }
});