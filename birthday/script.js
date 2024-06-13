const card = document.querySelector('.card');
const photoContainer = document.querySelector('.photo-container');

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
        // const photo = prompt('Enter the URL of your birthday photo:');
        if (photo) {
            const img = document.createElement('img');
            img.src = photo;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            photoContainer.appendChild(img);
        }
    } else {
        photoContainer.innerHTML = '';
    }
});