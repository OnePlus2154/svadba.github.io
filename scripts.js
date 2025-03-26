document.addEventListener('DOMContentLoaded', function () {
    // Показать модальное окно при загрузке страницы
    document.getElementById('age-modal').style.display = 'block';

    // Обработчик для кнопки "Да"
    document.getElementById('yes-button').addEventListener('click', function () {
        document.getElementById('age-modal').style.display = 'none';
    });

    // Обработчик для кнопки "Нет"
    document.getElementById('no-button').addEventListener('click', function () {
        window.location.href = 'https://www.google.com'; // Перенаправление на другую страницу
    });
});

// Прогресс-бар
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2025-06-23T23:59:59').getTime();

    const timerParts = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(timerInterval);
            Object.values(timerParts).forEach(part => part.textContent = '00');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerParts.days.textContent = days < 10 ? `0${days}` : days;
        timerParts.hours.textContent = hours < 10 ? `0${hours}` : hours;
        timerParts.minutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
        timerParts.seconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to avoid delay
});
