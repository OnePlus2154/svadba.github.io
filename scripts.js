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
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('wedding-music');
    const toggleBtn = document.getElementById('music-toggle');
    const volumeControl = document.getElementById('volume-control');
    
    // Автовоспроизведение (с обработкой политики браузеров)
    function startMusic() {
      audio.volume = 0.1; // Стартовая громкость 50%
      audio.play().catch(e => {
        console.log("Автовоспроизведение заблокировано. Нажмите кнопку ♫");
      });
    }
    
    // Попытка автовоспроизведения после взаимодействия
    document.body.addEventListener('click', function() {
      if (audio.paused) {
        startMusic();
      }
    }, { once: true });
    
    // Кнопка вкл/выкл
    toggleBtn.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        this.textContent = '♫';
      } else {
        audio.pause();
        this.textContent = '🔇';
      }
    });
    
    // Регулятор громкости
    volumeControl.addEventListener('input', function() {
      audio.volume = this.value;
    });
    
    // Иконка меняется при изменении громкости
    volumeControl.addEventListener('change', function() {
      toggleBtn.textContent = this.value == 0 ? '🔇' : '♫';
    });
  });