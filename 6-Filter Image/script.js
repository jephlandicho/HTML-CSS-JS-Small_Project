const buttonSection = document.querySelectorAll('.buttons-section button');
const cardSection = document.querySelectorAll('.cards-section .card');
const cardsContainer = document.querySelector('.cards-section');

const filterCards = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    cardsContainer.style.opacity = '0';

    setTimeout(() => {
        cardSection.forEach((card) => {
            card.style.display = 'none'; // Using display instead of adding a class for simplicity
            
            if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
                card.style.display = '';
            }
        });
        cardsContainer.style.opacity = '1';
    }, 300); // Timeout matches the CSS opacity transition duration
};

buttonSection.forEach((button) => button.addEventListener('click', filterCards));
