function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    let darkMode = localStorage.getItem('darkMode');

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll('.card').forEach(card => card.classList.add('dark-mode'));
        document.querySelectorAll('.learn-more-btn').forEach(btn => btn.classList.add('dark-mode'));

        darkModeToggle.classList.remove('fa-moon-o');
        darkModeToggle.classList.add('fa-sun-o');

        localStorage.setItem('darkMode', 'enabled');
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        document.querySelector('header').classList.remove('dark-mode');
        document.querySelector('footer').classList.remove('dark-mode');
        document.querySelectorAll('.card').forEach(card => card.classList.remove('dark-mode'));
        document.querySelectorAll('.learn-more-btn').forEach(btn => btn.classList.remove('dark-mode'));

        darkModeToggle.classList.remove('fa-sun-o');
        darkModeToggle.classList.add('fa-moon-o');

        localStorage.setItem('darkMode', 'disabled');
    };

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});




