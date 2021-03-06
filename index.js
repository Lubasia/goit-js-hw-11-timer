
function pad(value) {
  return String(value).padStart(2, '0');
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerEl = document.querySelector(selector);
    this.daysEl = this.timerEl.querySelector('span[data-value="days"]');
    this.hoursEl = this.timerEl.querySelector('span[data-value="hours"]');
    this.minsEl = this.timerEl.querySelector('span[data-value="mins"]');
    this.secsEl = this.timerEl.querySelector('span[data-value="secs"]');

    let timerId = setInterval(() => {
      const time = this.targetDate - new Date();
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
      this.daysEl.textContent = `${days}`;
      this.hoursEl.textContent = `${hours}`;
      this.minsEl.textContent = `${mins}`;
      this.secsEl.textContent = `${secs}`;
    
      if (time < 1) {
        clearInterval(timerId);
      }
    
    }, 1000);
}
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('August 24, 2021'),
});