const targetDate = Date.parse('2025-08-24:00:00:00')



setInterval(() => {
    const currentDate = Date.now()
    const time = targetDate - currentDate

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    document.querySelector('[data-value="days"]').textContent = days

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector('[data-value="hours"]').textContent = hours

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector('[data-value="mins"]').textContent = mins

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    document.querySelector('[data-value="secs"]').textContent = secs
}, 1000)