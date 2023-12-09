const countdown = (hours) => {
    const countdowns = document.querySelectorAll('[data-countdown]');

    function declOfNum(number, titles) {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }

    countdowns.forEach(countdown => {
        const countdownItems = countdown.querySelectorAll('[data-countdown-item]');
        let countNumber = localStorage['counter'] ? localStorage.getItem('counter') : hours * 60 * 60;
        const data = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

        const updateUI = () => {
            countdownItems.forEach(item => {
               if (item.dataset.countdownItem === 'hours') {
                   item.querySelector('.countdown__number').textContent = String(data.hours).padStart(2, '0');
                   item.querySelector('.countdown__caption').textContent = declOfNum(data.hours, ['година', 'години', 'годин']);
               }

               if (item.dataset.countdownItem === 'minutes') {
                   item.querySelector('.countdown__number').textContent = String(data.minutes).padStart(2, '0');
                   item.querySelector('.countdown__caption').textContent = declOfNum(data.minutes, ['хвилина', 'хвилини', 'хвилин']);
               }

               if (item.dataset.countdownItem === 'seconds') {
                    item.querySelector('.countdown__number').textContent = String(data.seconds).padStart(2, '0');
                    item.querySelector('.countdown__caption').textContent = declOfNum(data.seconds, ['секунда', 'секунди', 'секунд']);
                }
            });
        }

        const count = (counter) => {
            data.hours = Math.floor(counter / 60 / 60);
            data.minutes = Math.floor((counter / 60) % 60);
            data.seconds = Math.floor(counter % 60);
        };

        const start = () => {
            if (countNumber < 0) countNumber = hours * 60 * 60;
            count(countNumber);
            localStorage.setItem('counter', countNumber);
            countNumber--;
            updateUI();
        }

        start();
        setInterval(start, 1000);
    });
}

countdown(23.4);
