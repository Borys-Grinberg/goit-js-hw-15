let counterValue = 0;

// Отримуємо посилання на елементи DOM
const valueEl = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// Додаємо слухачив подій для кнопок
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

// Функція для оновлення значення лічильника на сторінці
function updateCounterValue() {
  valueEl.textContent = counterValue;
}
