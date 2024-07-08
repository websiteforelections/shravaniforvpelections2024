
const containers = document.querySelectorAll('.container');

containers.forEach(container => {
    container.addEventListener('touchstart', () => {
        container.classList.add('active');
    });

    container.addEventListener('touchend', () => {
        container.classList.remove('active');
    });
});
