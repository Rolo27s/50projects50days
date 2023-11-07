const counters = document.querySelectorAll('.counter');
counters[0].innerHTML = 0;
counters[1].innerHTML = 0;
counters[2].innerHTML = 0;

let counterValue0 = 0;
let counterValue1 = 0;
let counterValue2 = 0;

const increaseCounter = setInterval(() => {
  if (counterValue0 < 12000) {
    counterValue0 += 120;
    counters[0].innerHTML = counterValue0;
  }

  if (counterValue1 < 5000) {
    counterValue1 += 50;
    counters[1].innerHTML = counterValue1;
  }

  if (counterValue2 < 7500) {
    counterValue2 += 75;
    counters[2].innerHTML = counterValue2;
  }

  if (counterValue0 === 12000 && counterValue1 === 5000 && counterValue2 === 7500) {
    clearInterval(increaseCounter);
  }
}, 12);
